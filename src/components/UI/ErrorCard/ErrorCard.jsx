import React from 'react';

function ErrorCard({ title, text, img }) {
	return (
		<div className="error-card">
			<div className="error-card__container">
				<img src={img} className="error-card__image" alt="иконка сообщения"></img>
				<h3 className="error-card__title">{title}</h3>
				<p className="error-card__text">{text}</p>
			</div>
		</div>
	);
}

export default ErrorCard;
