import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, Button, Range, CalculatorResult } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { loadDeposits } from '../../store/deposits/depositsSlice';
import { editCalculatorValues } from '../../store/calculator/calculatorSlice';

function Calculator() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const deposits = useSelector((state) => state.deposits);
	const calculator = useSelector((state) => state.calculator);
	const sliderRef = useRef();
	const [validate, setValidate] = useState();

	useEffect(() => {
		if (calculator.isCredit) {
			sliderRef.current.classList.add('calculator__slider_position_right');
		} else {
			sliderRef.current.classList.remove('calculator__slider_position_right');
		}
	}, [calculator.isCredit, deposits]);

	useEffect(() => {
		dispatch(loadDeposits({ amount: calculator.depositAmount, term: calculator.depositTerm }));
	}, [calculator]);

	const chooseCredit = () => {
		dispatch(editCalculatorValues({ isCredit: true }));
	};

	const chooseDeposit = () => {
		dispatch(editCalculatorValues({ isCredit: false }));
	};

	const getValues = (values, valid) => {
		setValidate(valid.validate);
		valid.validate && dispatch(editCalculatorValues(values));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(loadDeposits({ amount: calculator.depositAmount, term: calculator.depositTerm }))
			.then(() => {
				if (!deposits.error && !deposits.isLoading) {
					navigate('/deposits');
				}
			})
			.catch(() => {
				alert(deposits.message);
			});
	};

	const roundNumber = (number) => {
		return parseFloat(Math.round(number)).toLocaleString();
	};

	const replacePointNumber = (number) => {
		return String(number).replace('.', ',');
	};

	return (
		<section className="calculator">
			<h2 className="calculator__title title">Калькулятор</h2>
			<div className="calculator__container">
				<div className="calculator__products">
					<span
						className={`calculator__product ${
							!calculator.isCredit && 'calculator__product_active'
						}`}
						onClick={chooseDeposit}
						role="presentation"
					>
						Вклады
					</span>
					<span
						className={`calculator__product ${calculator.isCredit && 'calculator__product_active'}`}
						onClick={chooseCredit}
						role="presentation"
					>
						Кредиты
					</span>
					<div className="calculator__slider" ref={sliderRef} />
				</div>
				<form onSubmit={handleSubmit}>
					<div className="calculator__calculation">
						<div className="calculator__items">
							{!calculator.isCredit && (
								<>
									<Select
										name="depositAmount"
										placeHolder="Сумма вклада"
										currency={['₽', '$', '€', '¥']}
										defaultValue={calculator.depositAmount}
										getValue={getValues}
										max="10000000"
										min="15000"
									/>
									<Range
										name="depositTerm"
										placeHolder="Срок в месяцах"
										min="1"
										max="36"
										startValue={calculator.depositTerm}
										getValue={getValues}
									/>
								</>
							)}
							{calculator.isCredit && (
								<>
									<Select
										name="creditAmount"
										placeHolder="Сумма кредита"
										currency={['₽', '$', '€', '¥']}
										defaultValue={calculator.creditAmount}
										getValue={getValues}
										max="10000000"
										min="15000"
										disableOption={true}
									/>
									<Range
										name="creditTerm"
										placeHolder="Срок в годах"
										min="1"
										max="36"
										startValue={calculator.creditTerm}
										getValue={getValues}
									/>
								</>
							)}
						</div>
						<div className="calculator__results">
							<div className="calculator__results-display">
								{!calculator.isCredit ? (
									<>
										<CalculatorResult
											name="Ставка"
											value={`до ${
												replacePointNumber(deposits?.deposits[0]?.deposit?.rate) || '0'
											} %`}
											isLoading={deposits}
										/>
										<CalculatorResult
											name="Доход за период"
											value={`до ${roundNumber(deposits?.deposits[0]?.maturityInterest) || '0'}`}
											currency={calculator.currency}
										/>
										<CalculatorResult
											name="Доход за год"
											value={`до ${roundNumber(deposits?.deposits[0]?.annualInterest) || '0'}`}
											currency={calculator.currency}
										/>
									</>
								) : (
									<>
										<CalculatorResult name="Ставка" value="до 15,03 %" />
										<CalculatorResult
											name="Платеж от"
											value={`от 50 690`}
											currency={calculator.currency}
										/>
									</>
								)}
							</div>
							<Button
								textBtn={calculator.isCredit ? 'подобрать кредит' : 'подобрать вклад'}
								btnClass="button__primary"
								type="submit"
								disabled={!validate && true}
							/>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Calculator;
