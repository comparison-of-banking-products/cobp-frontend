import React from 'react';
import supportFoto from '../../images/image109533.png';
import { Button } from '../index';
import BankCard from '../BankCard/BankCard';

function SupportCard() {
	return (
		<li className="support__item">
			<BankCard name="support"></BankCard>
			<img className="support__foto" src={supportFoto} alt="-"></img>
			<h2 className="support__name">Анастасия Константиновна</h2>
			<p className="support__position">Начальник управления клиентского опыта и развития сети</p>
			<Button
				type="button"
				btnClass="button__primary"
				// onClick={onClick}
				disabled={true}
				textBtn="Спросить"
			></Button>
		</li>
	);
}

export default SupportCard;
