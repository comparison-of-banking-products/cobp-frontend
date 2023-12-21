import { useState } from 'react';
import { Button } from '../index';

function DepositsCardList() {
	const [selectedOption, setSelectedOption] = useState('по ставке');

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const options = [
		{ value: 'по ставке', label: 'По ставке' },
		{ value: 'По сроку', label: 'По сроку' },
		{ value: 'По доходу', label: 'По доходу' },
		{ value: 'По сумме', label: 'По сумме' },
	];

	return (
		<section aria-label="Вклады" className="deposits">
			<div className="deposits__filter">
				<select value={selectedOption} onChange={handleSelectChange} className="deposits__select">
					{options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					))}
				</select>

				<button className="deposits__button"></button>
			</div>

			{/* карточки вкладов */}

			<Button type="button" btnClass={'deposits__button-more'} textBtn={'Показать еще'}></Button>
		</section>
	);
}

export default DepositsCardList;
