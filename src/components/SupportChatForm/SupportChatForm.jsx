import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Button, Checkbox } from '../index';

const SupportChatForm = ({ onClose, showModal }) => {
	const {
		register,
		handleSubmit,
		control,
		setValue,
		trigger,
		clearErrors,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });

	const onSubmit = ({ name, email, question, agree }) => {
		console.log('name:', name);
		console.log('email:', email);
		console.log('question:', question);
		console.log('agree:', agree);
		// onClose();
	};

	const handleClose = () => {
		clearErrors(['name', 'email', 'question', 'agree']);
		onClose();
	};

	return (
		<div className={`support-chat-form ${showModal ? 'support-chat-form_open' : ''}`}>
			<button className="support-chat-form__close-btn" onClick={handleClose} />
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
							value: 5,
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
				<span className="support-chat-form__submit-message"></span>
				<Button
					type="submit"
					btnClass="support-chat-form__submit-btn button__primary"
					textBtn="Отправить"
					disabled={!isValid}
				/>
			</form>
		</div>
	);
};

export default SupportChatForm;
