import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, Button, Range, CalculatorResult } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { loadDeposits } from '../../store/deposits/depositsSlice';
import { editCalculatorValues } from '../../store/calculator/calculatorSlice';
import { loadCredits } from '../../store/credits/creditsSlice';
import { debounce } from 'lodash';
import { currencyList } from '../../utils/constants';
import info from '../../images/icons/info.svg';

function Calculator() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const deposits = useSelector((state) => state.deposits);

	const calculator = useSelector((state) => state.calculator);
	const credits = useSelector((state) => state.credits);
	const sliderRef = useRef();
	const [validate, setValidate] = useState();

	const depositResults = deposits?.deposits?.[0];
	const creditResults = credits?.credits?.[0];

	console.log(credits);

	useEffect(() => {
		dispatch(
			loadDeposits({
				amount: calculator.depositAmount,
				term: calculator.depositTerm,
			})
		);
	}, [calculator.depositAmount, calculator.depositTerm]);

	useEffect(() => {
		dispatch(
			loadCredits({
				amount: calculator.creditAmount,
				term: calculator.creditTerm,
			})
		);
	}, [calculator.creditAmount, calculator.creditTerm]);

	useEffect(() => {
		if (calculator.isCredit) {
			sliderRef.current.classList.add('calculator__slider_position_right');
		} else {
			sliderRef.current.classList.remove('calculator__slider_position_right');
		}
	}, [calculator.isCredit, deposits]);

	const chooseCredit = () => {
		dispatch(editCalculatorValues({ isCredit: true }));
	};

	const chooseDeposit = () => {
		dispatch(editCalculatorValues({ isCredit: false }));
	};

	const getValues = debounce((values, valid) => {
		setValidate(valid.validate);
		if (valid.validate) {
			dispatch(editCalculatorValues(values));
		} else {
			dispatch(loadDeposits({ amount: 0, term: 0 }));
			dispatch(loadCredits({ amount: 0, term: 0 }));
		}
	}, 500);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!calculator.isCredit) {
			dispatch(loadDeposits({ amount: calculator.depositAmount, term: calculator.depositTerm }))
				.then(() => {
					if (!deposits.error && !deposits.isLoading) {
						navigate('/deposits', { state: { fromCalculatorButton: true } });
					}
				})
				.catch(() => {
					alert(deposits.message);
				});
		} else {
			dispatch(loadCredits({ amount: calculator.creditAmount, term: calculator.creditTerm }))
				.then(() => {
					if (!credits.error && !credits.isLoading) {
						navigate('/credits', { state: { fromCalculatorButton: true } });
					}
				})
				.catch(() => {
					alert(credits.message);
				});
		}
	};

	const roundNumber = (number) => {
		if (typeof number === 'number') return parseFloat(Math.round(number)).toLocaleString();
	};

	const replacePointNumber = (number) => {
		if (typeof number === 'number') return String(number.toFixed(2)).replace('.', ',');
	};

	return (
		<section className="calculator">
			<h2 className="calculator__title title">Калькулятор</h2>
			<div
				className={`calculator__container ${
					(!calculator.isCredit && !depositResults) || (calculator.isCredit && !creditResults)
						? 'calculator__container_extended'
						: ''
				}`}
			>
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
					<div
						className={`calculator__calculation ${
							(!calculator.isCredit && !depositResults) || (calculator.isCredit && !creditResults)
								? 'calculator__calculation_extended'
								: ''
						}`}
					>
						<div className="calculator__items">
							{!calculator.isCredit && (
								<>
									<Select
										name="depositAmount"
										placeHolder="Сумма вклада"
										currency={currencyList}
										defaultValue={calculator.depositAmount}
										getValue={getValues}
										max="100000000"
										min="10000"
									/>
									<Range
										name="depositTerm"
										placeHolder="Срок"
										min="3"
										max="120"
										step="3"
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
										currency={currencyList}
										defaultValue={calculator.creditAmount}
										getValue={getValues}
										max="100000000"
										min="10000"
										disableOption={true}
									/>
									<Range
										name="creditTerm"
										placeHolder="Срок"
										min="3"
										max="120"
										step="3"
										startValue={calculator.creditTerm}
										getValue={getValues}
									/>
								</>
							)}
						</div>
						<div
							className={`calculator__results ${
								(!calculator.isCredit && !depositResults) || (calculator.isCredit && !creditResults)
									? 'calculator__results_extended'
									: ''
							}`}
						>
							<div className="calculator__results-display">
								{!calculator.isCredit && deposits?.deposits ? (
									<>
										<CalculatorResult
											name="Ставка"
											value={
												depositResults
													? `до ${replacePointNumber(depositResults.deposit.rate)} %`
													: '-'
											}
											isLoading={deposits}
										/>
										<CalculatorResult
											name="Доход за период"
											value={
												depositResults ? `до ${roundNumber(depositResults.maturityInterest)}` : '-'
											}
											currency={depositResults ? calculator.currency.split(' ')[1] : ''}
										/>
										<CalculatorResult
											name="Доход за год"
											value={
												depositResults ? `до ${roundNumber(depositResults.annualInterest)}` : '-'
											}
											currency={depositResults ? calculator.currency.split(' ')[1] : ''}
										/>
									</>
								) : (
									<>
										<CalculatorResult
											name="Ставка"
											value={
												creditResults
													? `до ${replacePointNumber(creditResults.credit.rate)} %`
													: '-'
											}
											isLoading={credits}
										/>
										<CalculatorResult
											name="Платеж от"
											value={
												creditResults ? `до ${roundNumber(creditResults.monthlyPayment)}` : '-'
											}
											currency={creditResults ? calculator.currency.split(' ')[1] : ''}
										/>
									</>
								)}
							</div>
							{((!calculator.isCredit && !depositResults) ||
								(calculator.isCredit && !creditResults)) && (
								<div className="calculator__results-notification">
									<img src={info} className="calculator__results-icon" alt="иконка информации" />
									<p className="calculator__results-text">
										К сожалению, мы не нашли подходящих предложений по заданным параметрам,
										пожалуйста измените их и попробуйте снова
									</p>
								</div>
							)}
							<Button
								textBtn={calculator.isCredit ? 'Подобрать кредит' : 'Подобрать вклад'}
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
