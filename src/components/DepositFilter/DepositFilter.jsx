import React from 'react';
import { useState, useEffect } from 'react';
import { Range, Button, Select, SelectMultiple } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { loadDeposits } from '../../store/deposits/depositsSlice';
import { editCalculatorValues } from '../../store/calculator/calculatorSlice';

function DepositFilter({ setIsSubmitted, isSubmitted }) {
	const dispatch = useDispatch();
	const calculator = useSelector((state) => state.calculator);

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

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
	};

	const handleButtonClick = (buttonType) => {
		if (buttonType === 'allDepo') {
			setIsAllDepo(true);
			setIsCapitalisation(false);
			setIsWithdraw(false);
			setIsReplenishment(false);
		} else if (buttonType === 'capitalisation') {
			setIsAllDepo(false);
			setIsCapitalisation(!isCapitalisation);
		} else if (buttonType === 'withdraw') {
			setIsAllDepo(false);
			setIsWithdraw(!isWithdraw);
		} else if (buttonType === 'replenishment') {
			setIsAllDepo(false);
			setIsReplenishment(!isReplenishment);
		}
	};

	return (
		<section className="deposit-filter">
			<div className="deposit-filter__container">
				<form className="deposit-filter__form" onSubmit={handleSubmit}>
					<div className="deposit-filter__inputs">
						<Select
							name="depositAmount"
							placeHolder="Сумма"
							currency={['Рубли ₽', 'Доллары $', 'Евро €', 'Юани ¥']}
							defaultValue={calculator.depositAmount}
							getValue={getCurrencyValue}
							max="1000000000"
						/>
						<Range
							name="depositTerm"
							placeHolder="Срок"
							min={3}
							max={120}
							step={3}
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
			</div>
		</section>
	);
}

export default DepositFilter;
