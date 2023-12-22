import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox } from '../index';

const SupportChatForm = ({ onClose, showModal }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [question, setQuestion] = useState('');
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Email:', email);
		console.log('Question:', question);
		console.log('Agree to terms:', isChecked);

		onClose();
	};

	return (
		<div className={`support-chat-form ${showModal ? 'support-chat-form_open' : ''}`}>
			<button className="support-chat-form__close-btn" onClick={onClose} />
			<h2 className="support-chat-form__title">Поддержка</h2>
			<form className="support-chat-form__form" name="supportChatForm" onSubmit={handleSubmit}>
				<input
					type="text"
					className="support-chat-form__input"
					value={name}
					placeholder="Имя"
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<input
					type="email"
					className="support-chat-form__input"
					value={email}
					placeholder="E-mail"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<textarea
					value={question}
					placeholder="Вопрос"
					className="support-chat-form__textarea"
					onChange={(e) => setQuestion(e.target.value)}
					required
				/>
				<label className="support-chat-form__label">
					<Checkbox
						type="checkbox"
						checkboxClass="checkbox checkbox__agree"
						name="checkbox"
						onChange={handleCheckboxChange}
						required
					/>
					Даю&nbsp;
					<Link to="#" className="support-chat-form__link-agree">
						согласие
					</Link>
					&nbsp;на обработку персональных данных
				</label>
				<Button
					type="submit"
					btnClass="support-chat-form__submit-btn button__primary"
					textBtn="Отправить"
				/>
			</form>
		</div>
	);
};

export default SupportChatForm;
