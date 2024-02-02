import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Range, Button, Select, SelectMultiple } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { loadDeposits } from '../../store/deposits/depositsSlice';
import { editCalculatorValues } from '../../store/calculator/calculatorSlice';
import { debounce } from 'lodash';
import { currencyList } from '../../utils/constants';
import { initialVisibleCount } from '../../utils/constants';

function DepositFilter({ setIsSubmitted, isSubmitted, setVisibleCards }) {
	const dispatch = useDispatch();
	const calculator = useSelector((state) => state.calculator);
	console.log(calculator);

	const [selectedBanks, setSelectedBanks] = useState([]);

	const [isAllDepo, setIsAllDepo] = useState(true);
	const [isCapitalisation, setIsCapitalisation] = useState(false);
	const [isWithdraw, setIsWithdraw] = useState(false);
	const [isReplenishment, setIsReplenishment] = useState(false);

	const depositFilterRef = useRef(null);

	const [validate, setValidate] = useState();

	useEffect(() => {
		if (isSubmitted) {
			depositFilterRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isSubmitted]);

	useEffect(() => {
		isSubmitted && requestDepositsList();
	}, [
		calculator.depositAmount,
		calculator.depositTerm,
		isCapitalisation,
		isReplenishment,
		isWithdraw,
		selectedBanks,
		setVisibleCards,
	]);

	const requestDepositsList = () => {
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
		setVisibleCards(initialVisibleCount);
	};

	const getCurrencyValue = debounce((values, valid) => {
		setValidate(valid.validate);
		valid.validate && dispatch(editCalculatorValues(values));
	}, 500);

	const handleSubmit = (e) => {
		e.preventDefault();
		requestDepositsList();
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
		<section className="deposit-filter" ref={depositFilterRef}>
			<div className="deposit-filter__container">
				<form className="deposit-filter__form" onSubmit={handleSubmit}>
					<div className="deposit-filter__inputs">
						<Select
							name="depositAmount"
							placeHolder="Сумма"
							currency={currencyList}
							defaultValue={calculator.depositAmount || 100000}
							getValue={getCurrencyValue}
							max="100000000"
						/>
						<Range
							name="depositTerm"
							placeHolder="Срок"
							min={1}
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
							isDeposist={true}
						/>
					</div>
					<Button
						textBtn={'Показать'}
						btnClass={'deposit-filter__submit'}
						type={'submit'}
						disabled={!isSubmitted && selectedBanks.length === 0}
					/>
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
