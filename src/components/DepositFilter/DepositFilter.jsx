import React from 'react';
import { useState, useEffect } from 'react';
import { Range, Button, Select, SelectMultiple } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { loadDeposits } from '../../store/deposits/depositsSlice';
import { editCalculatorValues } from '../../store/calculator/calculatorSlice';

function DepositFilter() {
    const dispatch = useDispatch();
    const calculator = useSelector((state) => state.calculator);

	const bankList = ['Альфа-Банк', 'Райффайзен Банк', 'ВТБ', 'Сбербанк', 'Тинькофф Банк'];

	const [selectedBanks, setSelectedBanks] = useState(bankList);
	// const [dataReceived, setDataRecieved] = useState(false);

	const [isAllDepo, setIsAllDepo] = useState(true);
	const [isCapitalisation, setIsCapitalisation] = useState(false);
	const [isWithdraw, setIsWithdraw] = useState(false);
	const [isReplenishment, setIsReplenishment] = useState(false);

    const [validate, setValidate] = useState();

    useEffect(() => {
		dispatch(loadDeposits({ amount: calculator.depositAmount, term: calculator.depositTerm }));
	}, [calculator]);

	const getCurrencyValue = (values, valid) => {
        setValidate(valid.validate);
		valid.validate && dispatch(editCalculatorValues(values));
	};

	const getSelectedBanksValue = (value) => {
		setSelectedBanks(value);
	};

	const handleSubmit = () => {
		console.log('постучались в API');

		// const requestData = {
		//     currency,
		//     selectedBanks,
		// };
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
		console.log('отфильтровали результаты');
	};

	return (
		<section className="deposit-filter">
			<form className="deposit-filter__form">
				<div className="deposit-filter__inputs">
					<Select
						name="depositAmount"
						placeHolder="Сумма"
						currency={['₽', '$', '€', '¥']}
						defaultValue={calculator.depositAmount}
						getValue={getCurrencyValue}
						max="10000000"
					/>
					<Range 
                        name="depositTerm"
                        placeHolder="Срок" 
                        min={1}
                        max={12}
                        startValue={calculator.depositTerm}
						getValue={getCurrencyValue}
                    />
					<SelectMultiple
						getValue={getSelectedBanksValue}
						name="banks"
						placeHolder="Банки"
						multiOptions={bankList}
						selectedBanks={selectedBanks}
						setSelectedBanks={setSelectedBanks}
					/>
				</div>
				<Button
					textBtn={'Показать'}
					btnClass={'deposit-filter__submit'}
					type={'submit'}
					onClick={handleSubmit}
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
					// disabled={'false'}
				/>
				<Button
					textBtn={'С капитализацией'}
					btnClass={`deposit-filter__checkbox deposit-filter__checkbox${
						isCapitalisation ? '_active' : ''
					}`}
					type={'button'}
					onClick={() => handleButtonClick('capitalisation')}
					// disabled={'true'}
				/>
				<Button
					textBtn={'С частичным снятием'}
					btnClass={`deposit-filter__checkbox deposit-filter__checkbox${
						isWithdraw ? '_active' : ''
					}`}
					type={'button'}
					onClick={() => handleButtonClick('withdraw')}
					// disabled={'true'}
				/>
				<Button
					textBtn={'С пополнением'}
					btnClass={`deposit-filter__checkbox deposit-filter__checkbox${
						isReplenishment ? '_active' : ''
					}`}
					type={'button'}
					onClick={() => handleButtonClick('replenishment')}
					// disabled={'true'}
				/>
			</div>
		</section>
	);
}

export default DepositFilter;
