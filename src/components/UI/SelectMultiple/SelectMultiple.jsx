import { useEffect, useRef, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrowDown from '../../../vendor/images/icons/chevron-bottom.svg';
import { Checkbox } from '../../';
import { loadBanksList } from '../../../store/banksList/banksListSlice';

function SelectMultiple({ placeHolder, name, selectedBanks, setSelectedBanks }) {
	const optionsRef = useRef();
	const dispatch = useDispatch();
	const [allBanksSelected, setAllBanksSelected] = useState(true);
	const banksList = useSelector((state) => state.banksList.banksList);
	const bankNames = banksList.map((bank) => bank.name);
	// console.log('selectedBanks', selectedBanks);
	// console.log('banksList:', banksList);
	// console.log('bankNames:', bankNames);

	useEffect(() => {
		if (banksList.length > 0) {
			setSelectedBanks(banksList);
		}
	}, [banksList]);

	useEffect(() => {
		dispatch(loadBanksList({}));
	}, []);

	const toggleOptions = () => {
		if (optionsRef.current) {
			optionsRef.current.classList.toggle('select-multiple__options_active');
		}
	};

	const handleCheckboxClick = (optionValue) => {
		let updatedSelectedBanks;

		if (optionValue === 'Все банки') {
			setAllBanksSelected(!allBanksSelected);
			updatedSelectedBanks = allBanksSelected ? [] : banksList;
		} else {
			updatedSelectedBanks = selectedBanks.some((bank) => bank.name === optionValue)
				? selectedBanks.filter((bank) => bank.name !== optionValue)
				: [...selectedBanks, banksList.find((bank) => bank.name === optionValue)];
		}

		setAllBanksSelected(updatedSelectedBanks.length === banksList.length);
		setSelectedBanks(updatedSelectedBanks);
	};

	const handleOptionClick = (e) => {
		const optionValue = e.target.textContent;
		handleCheckboxClick(optionValue);
	};

	const getSelectedBanksDisplay = () => {
		if (allBanksSelected) {
			return 'Все банки';
		} else if (selectedBanks.length === 0) {
			return 'Нет выбранных банков';
		} else if (selectedBanks.length === 1) {
			return selectedBanks[0].name;
		} else if (selectedBanks.length > 1) {
			const displayNames = selectedBanks.map((bank) => bank.name);
			return `${displayNames.join(', ')}`;
		} else {
			return '';
		}
	};

	return (
		<div className="select-multiple">
			<div className="select-multiple__text">
				<span className="select-multiple__placeholder">{placeHolder}</span>
				<div className="select-multiple__input-container">
					{selectedBanks.length < banksList.length && (
						<span className="select-multiple__icon-count" style={{ backgroundColor: '#FBFBFB' }}>
							{selectedBanks.length}
						</span>
					)}
					<input
						className="select-multiple__input"
						value={getSelectedBanksDisplay() || ''}
						name={name}
						readOnly
						onClick={toggleOptions}
					/>
					{/* <div className="select-multiple__icon-container">
						{selectedBanks.length < banksList.length && (
							<span className="select-multiple__icon-count" style={{ backgroundColor: '#FBFBFB' }}>
								{selectedBanks.length}
							</span>
						)}
					</div> */}
				</div>
				<div className="select-multiple__options" ref={optionsRef}>
					<div className="select-multiple__option" onClick={handleOptionClick}>
						<p>Все банки</p>
						<Checkbox
							checkboxClass="checkbox"
							type="checkbox"
							checked={selectedBanks.length === banksList.length}
							onChange={() => handleCheckboxClick('Все банки')}
						/>
					</div>
					{bankNames.map((name, index) => (
						<div key={index} className="select-multiple__option" onClick={handleOptionClick}>
							<p>{name}</p>
							<Checkbox
								checkboxClass="checkbox"
								type="checkbox"
								checked={selectedBanks.some((bank) => bank.name === name)}
								onChange={() => handleCheckboxClick(name)}
							/>
						</div>
					))}
				</div>
			</div>
			<div>
				<div
					className="select-multiple__icon"
					style={{ backgroundImage: `url(${arrowDown})` }}
					onClick={toggleOptions}
				></div>
			</div>
		</div>
	);
}

export default SelectMultiple;
