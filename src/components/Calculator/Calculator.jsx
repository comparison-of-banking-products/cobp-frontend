import { useState, useEffect, useRef } from 'react';
import { Select, Button, Range } from '../';

function Calculator() {
	const [isCredit, setIsCredit] = useState(false);
	const [currency, setCurrency] = useState(false);
	const sliderRef = useRef();

	useEffect(() => {
		if (isCredit) {
			sliderRef.current.classList.add('calculator__slider_position_right');
		} else {
			sliderRef.current.classList.remove('calculator__slider_position_right');
		}
	}, [isCredit]);

	const chooseCredit = () => {
		setIsCredit(true);
	};

	const chooseDeposit = () => {
		setIsCredit(false);
	};

	const getCurrencyValue = (value) => {
		setCurrency(value);
	};

	return (
		<section className="calculator">
			<h2 className="calculator__title title">калькулятор</h2>
			<div className="calculator__container">
				<div className="calculator__products">
					<span className="calculator__product" onClick={chooseDeposit} role="presentation">
						вклады
					</span>
					<span className="calculator__product" onClick={chooseCredit} role="presentation">
						кредиты
					</span>
					<div className="calculator__slider" ref={sliderRef} />
				</div>
				<form>
					<div className="calculator__calculation">
						<div className="calculator__items">
							{!isCredit ? (
								<>
									<Range
										name="summ"
										placeHolder="cумма вклада"
										symbol={currency}
										min={10000}
										max={1000000}
										startValue={240000}
									/>
									<Select
										getValue={getCurrencyValue}
										name="currency"
										placeHolder="валюта"
										options={['₽', '$']}
									/>
									<Range
										name="term"
										placeHolder="срок в месяцах"
										min={1}
										max={360}
										startValue={60}
									/>
								</>
							) : (
								<>
									<Range
										name="summ"
										placeHolder="сумма кредита"
										symbol={currency}
										min={10000}
										max={1000000}
										startValue={240000}
									/>
									<Range name="term" placeHolder="срок в годах" min={1} max={30} startValue={10} />
								</>
							)}
						</div>
						<div className="calculator__results">
							<div className="calculator__results-display">
								{!isCredit ? (
									<>
										<div className="calculator__result">
											<span className="calculator__result-name">ставка:</span>
											<span className="calculator__result-value">до 15,03 %</span>
										</div>
										<div className="calculator__result">
											<span className="calculator__result-name">доход за период:</span>
											<span className="calculator__result-value">до 50 690 {currency}</span>
										</div>
										<div className="calculator__result">
											<span className="calculator__result-name">доход за год:</span>
											<span className="calculator__result-value">до 50 690 {currency}</span>
										</div>
									</>
								) : (
									<>
										<div className="calculator__result">
											<span className="calculator__result-name">платеж от:</span>
											<span className="calculator__result-value">от 50 690 {currency}</span>
										</div>
									</>
								)}
							</div>
							<Button
								textBtn={isCredit ? 'подобрать кредит' : 'подобрать вклад'}
								btnClass="button__primary"
								type="submit"
							/>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Calculator;
