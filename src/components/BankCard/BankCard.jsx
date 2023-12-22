import React from 'react';
import bankLogo from '../../images/bank-logo.png';
import { Link } from 'react-router-dom';

function BankCard({ name }) {
	const className = name === 'bank' ? 'banks__item' : 'support__banks';
	const imageClassName = name === 'bank' ? 'banks__image' : 'support__image';
	const captionClassName = name === 'bank' ? 'banks__caption' : 'support__caption';

	return (
		<Link className={className} to="#">
			<img className={imageClassName} src={bankLogo} alt="-" />
			<p className={captionClassName}>райффайзен банк</p>
		</Link>
	);
}

export default BankCard;
