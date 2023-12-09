import React from 'react';
import Input from '../UI/Input/Input';
import bankLogo from '../../images/logo.png';

function Banks() {
	return (
		<section className="banks">
			<h1 className="banks__title">банки вашего города</h1>
			<Input type="text" inputClass={'input__primary'} value={'поиск по названию банка'}></Input>
			<ul className="banks__lists">
				<li>
					<button className="banks__item">
						<img className="banks__image" src={bankLogo} alt="-"></img>
						<caption className="banks__caption">райффайзен банк</caption>
					</button>
				</li>
				<li>
					<button className="banks__item">
						<img className="banks__image" src={bankLogo} alt="-"></img>
						<caption className="banks__caption">райффайзен банк</caption>
					</button>
				</li>
			</ul>
		</section>
	);
}

export default Banks;
