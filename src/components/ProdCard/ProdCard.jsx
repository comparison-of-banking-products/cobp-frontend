import React from 'react';
import arrow from '../../images/icons/arrow-icon.svg';
import { Link } from 'react-router-dom';

function ProdCard({ className, title, text }) {
	return (
		<Link to="#" className={className}>
			<img src={arrow} className="prod-card__icon" alt="иконка стрелки" />
			<h3 className="prod-card__title">{title}</h3>
			<p className="prod-card__text">{text}</p>
		</Link>
	);
}

export default ProdCard;
