import React from 'react';
import bankLogo from '../../images/bank-logo.png';
import supportFoto from '../../images/image109533.png';
import { Button } from '../index';

function SupportCard() {
	return (
		<li className="support__item">
			<button className="support__banks">
				<img className="support__image" src={bankLogo} alt="-"></img>
				<caption className="support__caption">райффайзен банк</caption>
			</button>
			<img className="support__foto" src={supportFoto} alt="-"></img>
			<h2 className="support__name">Анастасия Константиновна</h2>
			<p className="support__position">начальник управления клиентского опыта и развития сети</p>
			<Button
				type="button"
				btnClass="button__primary"
				// onClick={onClick}
				disabled={true}
				textBtn="спросить"
			></Button>
		</li>
	);
}

export default SupportCard;
