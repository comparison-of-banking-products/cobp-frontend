import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Button, Checkbox, SupportChatSuccess } from '../../index';
import { BASE_URL_SUPPORT_CHAT } from '../../../utils/constants';

const SupportChatForm = ({ onClose, showModal }) => {
	const {
		register,
		handleSubmit,
		control,
		setValue,
		trigger,
		clearErrors,
		reset,
		formState: { errors, isValid, isSubmitting },
	} = useForm({ mode: 'all' });

	const [isSubmitError, setIsSubmitError] = useState('');
	const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);

	const handleClose = () => {
		clearErrors(['name', 'email', 'question', 'agree']);
		setIsSubmitError('');
		onClose();
	};

	const onSubmit = async ({ name, email, question, agree }) => {
		try {
			const response = await axios.post(`${BASE_URL_SUPPORT_CHAT}/supports`, {
				name,
				email,
				question,
				agree,
			});

			const result = response.data;

			if (result) {
				setIsSuccessSubmit(true);

				setTimeout(() => {
					handleClose();
					reset();
					setTimeout(() => {
						reset();
						setIsSuccessSubmit(false);
					}, 500);
				}, 3000);
			}
		} catch (error) {
			setIsSubmitError(
				'Ваш запрос не может быть обработан в текущий момент. Попробуйте снова через некоторое время.'
			);
		}
	};

	return (
		<div className={`support-chat-form ${showModal ? 'support-chat-form_open' : ''}`}>
			<Button type="button" btnClass="support-chat-form__close-btn" onClick={handleClose} />
			{!isSuccessSubmit ? (
				<>
					<h2 className="support-chat-form__title">Поддержка</h2>
					<form
						className="support-chat-form__form"
						name="supportChatForm"
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							type="text"
							className={`support-chat-form__input ${
								errors?.name ? 'support-chat-form__input_error' : ''
							}`}
							placeholder="Имя"
							{...register('name', {
								required: 'Поле обязательно для заполнения',
								minLength: {
									value: 2,
									message: 'Введите не менее 2 символов',
								},
								maxLength: {
									value: 30,
									message: 'Введите не более 30 символов',
								},
								pattern: {
									value: /^[a-zA-Z-\u0430-\u044f\u0410-\u042fёЁ\s]*$/,
									message: 'Разрешены только буквы, пробелы и дефисы.',
								},
							})}
						/>
						<span className="support-chat-form__error-message">{errors?.name?.message}</span>
						<input
							type="email"
							className={`support-chat-form__input ${
								errors?.email ? 'support-chat-form__input_error' : ''
							}`}
							placeholder="Email"
							{...register('email', {
								required: 'Поле обязательно для заполнения',
								pattern: {
									value: /^[a-zA-Z0-9.-]+@[a-zA-Z0-9_]+\.[a-z]{2,6}$/i,
									message: 'Введите корректный email: example@example.ru',
								},
								minLength: {
									value: 2,
									message: 'Введите не менее 2 символов',
								},
								maxLength: {
									value: 100,
									message: 'Введите не более 100 символов',
								},
							})}
						/>
						<span className="support-chat-form__error-message">{errors?.email?.message}</span>
						<textarea
							placeholder="Вопрос"
							className={`support-chat-form__textarea ${
								errors?.question ? 'support-chat-form__input_error' : ''
							}`}
							{...register('question', {
								required: 'Поле обязательно для заполнения',
								maxLength: {
									value: 1000,
									message: 'Введите не более 1000 символов',
								},
							})}
						/>
						<span className="support-chat-form__error-message">{errors?.question?.message}</span>
						<label className="support-chat-form__label">
							<Controller
								name="agree"
								control={control}
								defaultValue={false}
								rules={{ required: 'Подтвердите согласие' }}
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
							textBtn={`${isSubmitting ? 'Отправка...' : 'Отправить'}`}
							disabled={!isValid || isSubmitting}
						/>
					</form>
				</>
			) : (
				<SupportChatSuccess />
			)}
		</div>
	);
};

export default SupportChatForm;
