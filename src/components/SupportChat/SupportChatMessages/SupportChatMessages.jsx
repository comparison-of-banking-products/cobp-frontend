import React, { useState } from 'react';
import { Button } from '../../index';
import { useForm } from 'react-hook-form';
import { formValidationRules } from '../../../utils/formValidationRules';
import { getFormattedDateTime } from '../../../utils/helpers/getFormattedDateTime';
import { SupportChatMessagesList } from '../../index';

function SupportChatMessages({
	client,
	isSubmitError,
	setIsSubmitError,
	messages,
	setMessages,
	getValues,
}) {
	const {
		register,
		handleSubmit,
		clearErrors,
		reset,
		formState: { errors, isValid, isSubmitting },
	} = useForm({ mode: 'onChange' });

	const onSubmit = async ({ question, agreementStatus = 'AGREEMENT_ACCEPTED' }) => {
		try {
			const formattedDate = getFormattedDateTime();

			client.publish({
				destination: '/app/support',
				body: JSON.stringify({
					name: getValues('name'),
					email: getValues('email'),
					question,
					agreementStatus,
				}),
			});
			setMessages((prev) => [...prev, { text: question, date: formattedDate, isUser: true }]);
			reset();
		} catch (error) {
			setIsSubmitError(
				'Ваш запрос не может быть обработан в текущий момент. Попробуйте снова через некоторое время.'
			);
		}
	};

	return (
		<>
			<SupportChatMessagesList messages={messages} />
			<form
				className="support-chat-form__form"
				name="supportChat"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="support-chat-form__container">
					<input
						type="text"
						className={`support-chat-form__input ${
							errors?.message ? 'support-chat-form__input_error' : ''
						}`}
						placeholder="Введите текст"
						{...register('question', formValidationRules.message)}
					/>
					<Button
						type="submit"
						btnClass="support-chat-form__send-message button__primary"
						disabled={!isValid || isSubmitting}
					/>
				</div>
				{errors?.message && (
					<span className="support-chat-form__error-message">{errors?.question?.message}</span>
				)}
				{isSubmitError && <span className="support-chat-form__error-submit">{isSubmitError}</span>}
			</form>
		</>
	);
}

export default SupportChatMessages;
