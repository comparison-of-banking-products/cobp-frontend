import React from 'react';
import { useState, useEffect } from 'react';
import { Range, Button, Select, SelectMultiple } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { loadDeposits } from '../../store/deposits/depositsSlice';
import { editCalculatorValues } from '../../store/calculator/calculatorSlice';

function DepositFilter({ isSubmitted, setIsSubmitted }) {
	const dispatch = useDispatch();
	const calculator = useSelector((state) => state.calculator);
	// const depositList = useSelector((state) => state.deposits.deposits);
	// console.log('depositList:', depositList);

	const [selectedBanks, setSelectedBanks] = useState([]);

	// const [isAllDepo, setIsAllDepo] = useState(localStorage.getItem('isAllDepo') === 'true' || true);
	// const [isCapitalisation, setIsCapitalisation] = useState(localStorage.getItem('isCapitalisation') === 'true' || false);
	// const [isWithdraw, setIsWithdraw] = useState(localStorage.getItem('isWithdraw') === 'true' || false);
	// const [isReplenishment, setIsReplenishment] = useState(localStorage.getItem('isReplenishment') === 'true' || false);

	const [isAllDepo, setIsAllDepo] = useState(true);
	const [isCapitalisation, setIsCapitalisation] = useState(false);
	const [isWithdraw, setIsWithdraw] = useState(false);
	const [isReplenishment, setIsReplenishment] = useState(false);

	const [validate, setValidate] = useState();

	useEffect(() => {
		dispatch(
			loadDeposits({
				amount: calculator.depositAmount,
				term: calculator.depositTerm,
				capitalization: isCapitalisation,
				replenishment: isReplenishment,
				partialWithdrawal: isWithdraw,
				banks: selectedBanks,
			})
		);
	}, [calculator, isCapitalisation, isReplenishment, isWithdraw, selectedBanks]);

	useEffect(() => {
		setIsAllDepo(true);
	}, []);

	const getCurrencyValue = (values, valid) => {
		setValidate(valid.validate);
		valid.validate && dispatch(editCalculatorValues(values));
	};

	const handleSubmit = () => {
		setIsSubmitted(true);
		console.log('можно рендерить карточки:', isSubmitted);
	};

	const handleButtonClick = (buttonType) => {
		if (buttonType === 'allDepo') {
			setIsAllDepo(true);
			setIsCapitalisation(false);
			setIsWithdraw(false);
			setIsReplenishment(false);
			localStorage.setItem('isAllDepo', true);
		} else if (buttonType === 'capitalisation') {
			setIsAllDepo(false);
			setIsCapitalisation(!isCapitalisation);
			localStorage.setItem('isCapitalisation', !isCapitalisation);
		} else if (buttonType === 'withdraw') {
			setIsAllDepo(false);
			setIsWithdraw(!isWithdraw);
			localStorage.setItem('isWithdraw', !isWithdraw);
		} else if (buttonType === 'replenishment') {
			setIsAllDepo(false);
			setIsReplenishment(!isReplenishment);
			localStorage.setItem('isReplenishment', !isReplenishment);
		}
	};

	return (
		<section className="deposit-filter">
			<form className="deposit-filter__form" onSubmit={handleSubmit}>
				<div className="deposit-filter__inputs">
					<Select
						name="depositAmount"
						placeHolder="Сумма"
						currency={['₽', '$', '€', '¥']}
						defaultValue={calculator.depositAmount}
						getValue={getCurrencyValue}
						max="1000000000"
					/>
					<Range
						name="depositTerm"
						placeHolder="Срок"
						min={3}
						max={120}
						startValue={calculator.depositTerm}
						getValue={getCurrencyValue}
					/>
					<SelectMultiple
						name="banks"
						placeHolder="Банки"
						selectedBanks={selectedBanks}
						setSelectedBanks={setSelectedBanks}
					/>
				</div>
				<Button textBtn={'Показать'} btnClass={'deposit-filter__submit'} type={'submit'} />
			</form>
			<div className="deposit-filter__checkboxes">
				<Button
					textBtn={'Все вклады'}
					btnClass={`deposit-filter__checkbox deposit-filter__checkbox${
						isAllDepo ? '_active' : ''
					}`}
					type={'button'}
					onClick={() => handleButtonClick('allDepo')}
				/>
				<Button
					textBtn={'С капитализацией'}
					btnClass={`deposit-filter__checkbox deposit-filter__checkbox${
						isCapitalisation ? '_active' : ''
					}`}
					type={'button'}
					onClick={() => handleButtonClick('capitalisation')}
				/>
				<Button
					textBtn={'С частичным снятием'}
					btnClass={`deposit-filter__checkbox deposit-filter__checkbox${
						isWithdraw ? '_active' : ''
					}`}
					type={'button'}
					onClick={() => handleButtonClick('withdraw')}
				/>
				<Button
					textBtn={'С пополнением'}
					btnClass={`deposit-filter__checkbox deposit-filter__checkbox${
						isReplenishment ? '_active' : ''
					}`}
					type={'button'}
					onClick={() => handleButtonClick('replenishment')}
				/>
			</div>
		</section>
	);
}

export default DepositFilter;
