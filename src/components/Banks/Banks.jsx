import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import bankLogo from '../../images/logo.png';

function Banks() {
	const [searchValue, setSearchValue] = useState('');

	const handleSearchInputChange = (newValue) => {
		setSearchValue(newValue);
	};

	return (
		<section className="banks">
			<h1 className="banks__title">банки вашего города</h1>
			<Input
				type="text"
				inputClass={'input__primary'}
				value={searchValue}
				onChange={handleSearchInputChange}
				placeholder={'поиск по названию банка'}
				disabled={true}
			></Input>
			<ul className="banks__lists">
				<li>
					<button className="banks__item">
						<img className="banks__image" src={bankLogo} alt="-"></img>
						<p className="banks__caption">райффайзен банк</p>
					</button>
				</li>
				<li>
					<button className="banks__item">
						<img className="banks__image" src={bankLogo} alt="-"></img>
						<p className="banks__caption">райффайзен банк</p>
					</button>
				</li>
			</ul>
		</section>
	);
}

export default Banks;
