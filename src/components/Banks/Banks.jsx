import React, { useState } from 'react';
import { Input } from '../index';
import BankCard from '../BankCard/BankCard';

function Banks() {
	const [searchValue, setSearchValue] = useState('');

	const handleSearchInputChange = (newValue) => {
		setSearchValue(newValue);
	};

	return (
		<section className="banks">
			<h2 className="banks__title">банки вашего города</h2>
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
					<BankCard name="bank"></BankCard>
				</li>
				<li>
					<BankCard name="bank"></BankCard>
				</li>
			</ul>
		</section>
	);
}

export default Banks;
