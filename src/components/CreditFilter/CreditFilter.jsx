import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Range, Button, Select, SelectMultiple } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { loadCredits } from '../../store/credits/creditsSlice';
import { editCalculatorValues } from '../../store/calculator/calculatorSlice';
import { debounce } from 'lodash';
import { currencyList } from '../../utils/constants';
import { initialVisibleCount } from '../../utils/constants';

function CreditFilter({ setIsSubmitted, isSubmitted, setVisibleCards }) {
	const dispatch = useDispatch();
	const calculator = useSelector((state) => state.calculator);
	const credits = useSelector((state) => state.credits);
	console.log('credits.credits', credits.credits);

	const [selectedBanks, setSelectedBanks] = useState([]);

	const [isAllCredits, setIsAllCredits] = useState(true);
	const [isCreditOnline, setIsCreditOnline] = useState(false);
	const [isOnlineApprove, setIsOnlineApprove] = useState(false);
	const [isCollateral, setIsCollateral] = useState(false);

	const creditFilterRef = useRef(null);

	const [validate, setValidate] = useState();

	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (isSubmitted) {
			creditFilterRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isSubmitted]);

	useEffect(() => {
		if (isSubmitted) {
			creditFilterRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isSubmitted]);

	useEffect(() => {
		isSubmitted && requestCreditsList();
	}, [
		calculator.creditAmount,
		calculator.creditTerm,
		isCreditOnline,
		isOnlineApprove,
		isCollateral,
		selectedBanks,
		setVisibleCards,
	]);

	const requestCreditsList = () => {
		dispatch(
			loadCredits({
				amount: calculator.creditAmount,
				term: calculator.creditTerm,
				creditOnline: isCreditOnline,
				onlineApprove: isOnlineApprove,
				collateral: isCollateral,
				banks: selectedBanks,
			})
		).then(() => {
			setIsSubmitting(false);
		});
		setVisibleCards(initialVisibleCount);
	};

	const getCurrencyValue = debounce((values, valid) => {
		setValidate(valid.validate);
		valid.validate && dispatch(editCalculatorValues(values));
	}, 500);

	const handleSubmit = (e) => {
		setIsSubmitting(true);
		e.preventDefault();
		requestCreditsList();
		setIsSubmitted(true);
	};

	const handleButtonClick = (buttonType) => {
		if (buttonType === 'allCredits') {
			setIsAllCredits(true);
			setIsCreditOnline(false);
			setIsOnlineApprove(false);
			setIsCollateral(false);
		} else if (buttonType === 'creditOnline') {
			setIsAllCredits(false);
			setIsCreditOnline(!isCreditOnline);
		} else if (buttonType === 'onlineApprove') {
			setIsAllCredits(false);
			setIsOnlineApprove(!isOnlineApprove);
		} else if (buttonType === 'collateral') {
			setIsAllCredits(false);
			setIsCollateral(!isCollateral);
		}
	};

	return (
		<section className="credit-filter" ref={creditFilterRef}>
			<div className="credit-filter__container">
				<form className="credit-filter__form" onSubmit={handleSubmit}>
					<div className="credit-filter__inputs">
						<Select
							name="creditAmount"
							placeHolder="Сумма"
							currency={currencyList}
							defaultValue={calculator.creditAmount}
							getValue={getCurrencyValue}
							max="1000000000"
							min="10000"
						/>
						<Range
							name="creditTerm"
							placeHolder="Срок"
							min={1}
							max={120}
							step={3}
							startValue={calculator.creditTerm}
							getValue={getCurrencyValue}
						/>
						<SelectMultiple
							name="banks"
							placeHolder="Банки"
							selectedBanks={selectedBanks}
							setSelectedBanks={setSelectedBanks}
							isDeposist={false}
						/>
					</div>
					<Button
						textBtn={'Показать'}
						btnClass={`credit-filter__submit ${
							isSubmitting ? 'credit-filter__submit_submitting' : ''
						}`}
						type={'submit'}
						disabled={!isSubmitted && selectedBanks.length === 0}
					/>
				</form>
				<div className="credit-filter__checkboxes">
					<Button
						textBtn={'Все кредиты'}
						btnClass={`credit-filter__checkbox credit-filter__checkbox${
							isAllCredits ? '_active' : ''
						}`}
						type={'button'}
						onClick={() => handleButtonClick('allCredits')}
					/>
					<Button
						textBtn={'Наличие залога'}
						btnClass={`credit-filter__checkbox credit-filter__checkbox${
							isCollateral ? '_active' : ''
						}`}
						type={'button'}
						onClick={() => handleButtonClick('collateral')}
					/>
					<Button
						textBtn={'Рассмотрение online'}
						btnClass={`credit-filter__checkbox credit-filter__checkbox${
							isOnlineApprove ? '_active' : ''
						}`}
						type={'button'}
						onClick={() => handleButtonClick('onlineApprove')}
					/>
					<Button
						textBtn={'Получение без посещения банка'}
						btnClass={`credit-filter__checkbox credit-filter__checkbox${
							isCreditOnline ? '_active' : ''
						}`}
						type={'button'}
						onClick={() => handleButtonClick('creditOnline')}
					/>
				</div>
			</div>
		</section>
	);
}

export default CreditFilter;
