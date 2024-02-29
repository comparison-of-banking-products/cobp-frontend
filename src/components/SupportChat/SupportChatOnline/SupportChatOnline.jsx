import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Client } from '@stomp/stompjs';
import { Button, Checkbox, SupportChatMessages } from '../../index';
import { formValidationRules } from '../../../utils/formValidationRules';
import { getFormattedDateTime } from '../../../utils/helpers/getFormattedDateTime';
import { BASE_URL_ONLINE_CHAT } from '../../../utils/constants';

function SupportChatOnline({ onClose, showModal }) {
	const {
		register,
		handleSubmit,
		control,
		setValue,
		clearErrors,
		trigger,
		getValues,
		formState: { errors, isValid, isSubmitting },
	} = useForm({ mode: 'onChange' });

	const [isSubmitError, setIsSubmitError] = useState('');
	const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);
	const [client, setClient] = useState(null);
	const [isConnected, setIsConnected] = useState(false);
	const [messages, setMessages] = useState([]);
	const [userEmail, setUserEmail] = useState('');

	const handleClose = () => {
		clearErrors(['name', 'email', 'question', 'agree']);
		setIsSubmitError('');
		onClose();
	};

	const formRef = useRef(null);
	const [touchStartY, setTouchStartY] = useState(null);

	useEffect(() => {
		const handleTouchStart = (e) => {
			setTouchStartY(e.touches[0].clientY);
		};

		const handleTouchMove = (e) => {
			const touchEndY = e.touches[0].clientY;
			if (touchStartY && touchEndY - touchStartY > 50) {
				handleClose();
			}
		};

		const handleTouchEnd = () => {
			setTouchStartY(null);
		};

		const formElement = formRef.current;
		if (formElement) {
			formElement.addEventListener('touchstart', handleTouchStart);
			formElement.addEventListener('touchmove', handleTouchMove);
			formElement.addEventListener('touchend', handleTouchEnd);
		}

		return () => {
			if (formElement) {
				formElement.removeEventListener('touchstart', handleTouchStart);
				formElement.removeEventListener('touchmove', handleTouchMove);
				formElement.removeEventListener('touchend', handleTouchEnd);
			}
		};
	}, [touchStartY]);

	useEffect(() => {
		const newCient = new Client();
		newCient.brokerURL = `${BASE_URL_ONLINE_CHAT}`;

		newCient.onConnect = () => {
			setIsConnected(true);
			newCient.subscribe(`/queue/support/${userEmail}`, (message) => {
				const formattedDate = getFormattedDateTime();

				setMessages((prev) => [
					...prev,
					{ text: message.body, date: formattedDate, isUser: false },
				]);
			});
		};

		newCient.onDisconnect = () => {
			setIsConnected(false);
		};

		newCient.activate();
		setClient(newCient);

		return () => {
			newCient.deactivate();
		};
	}, [userEmail]);

	const onSubmit = async ({ name, email, question = '', agree }) => {
		try {
			if (!client) {
				console.error('Ошибка: подключение к серверу ещё не установлено!');
				return;
			}

			if (!isConnected) {
				console.error('Ошибка: нет активного соединения с сервером!');
				return;
			}

			// const agreementStatus = agree ? 'AGREEMENT_ACCEPTED' : 'AGREEMENT_NOT_ACCEPTED';

			// await client.publish({
			// 	destination: '/app/support',
			// 	body: JSON.stringify({ name, email, question, agreementStatus }),
			// });

			setUserEmail(email);
			setIsSuccessSubmit(true);
		} catch (error) {
			console.error('Ошибка при отправке сообщения:', error);
			setIsSubmitError(
				'Ваш запрос не может быть обработан в текущий момент. Попробуйте снова через некоторое время.'
			);
		}
	};

	return (
		<div
			className={`support-chat-form ${showModal ? 'support-chat-form_open' : ''}`}
			ref={formRef}
			onClick={(e) => e.stopPropagation()}
		>
			<div className="support-chat-form__line"></div>
			<Button type="button" btnClass="support-chat-form__close-btn" onClick={handleClose} />
			<h2 className="support-chat-form__title">Поддержка</h2>
			{!isSuccessSubmit ? (
				<>
					<div className="support-chat-form__time-work">
						<p className="support-chat-form__text">
							Наша команда поддержки онлайн по рабочим дням с 10:00 до 23:00
						</p>
					</div>
					<form
						className="support-chat-form__form"
						name="supportChatOnline"
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							type="text"
							className={`support-chat-form__input ${
								errors?.name ? 'support-chat-form__input_error' : ''
							}`}
							placeholder="Имя"
							{...register('name', formValidationRules.name)}
						/>
						<span className="support-chat-form__error-message">{errors?.name?.message}</span>
						<input
							type="email"
							className={`support-chat-form__input ${
								errors?.email ? 'support-chat-form__input_error' : ''
							}`}
							placeholder="Email"
							{...register('email', formValidationRules.email)}
						/>
						<span className="support-chat-form__error-message">{errors?.email?.message}</span>
						<label className="support-chat-form__label">
							<Controller
								name="agree"
								control={control}
								defaultValue={false}
								rules={formValidationRules.agree}
								render={({ field }) => (
									<Checkbox
										type="checkbox"
										checkboxClass="checkbox checkbox__agree"
										name="checkbox"
										onChange={(e) => {
											setValue('agree', e.target.checked);
											trigger('agree');
										}}
										checked={field.value}
									/>
								)}
							/>
							Даю&nbsp;
							<Link to="#" className="support-chat-form__link-agree">
								согласие
							</Link>
							&nbsp;на обработку персональных данных
						</label>
						<span className="support-chat-form__error-message">{errors?.agree?.message}</span>
						<span className="support-chat-form__error-submit">{isSubmitError}</span>
						<Button
							type="submit"
							btnClass="support-chat-form__submit-btn button__primary"
							textBtn={`${isSubmitting ? 'Подключение...' : 'Начать чат'}`}
							disabled={!isValid || isSubmitting}
						/>
					</form>
				</>
			) : (
				<SupportChatMessages
					isSubmitError={isSubmitError}
					setIsSubmitError={setIsSubmitError}
					client={client}
					messages={messages}
					setMessages={setMessages}
					getValues={getValues}
				/>
			)}
		</div>
	);
}

export default SupportChatOnline;
