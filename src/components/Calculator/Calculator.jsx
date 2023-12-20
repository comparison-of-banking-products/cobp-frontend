import { useState, useEffect, useRef } from 'react';
import { Select, Button, Range } from '../';

function Calculator() {
	const [isCredit, setIsCredit] = useState(false);
	const [currency, setCurrency] = useState();
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

	const getCurrency = (values) => {
		setCurrency(values.option);
	};

	return (
		<section className="calculator">
			<h2 className="calculator__title title">Калькулятор</h2>
			<div className="calculator__container">
				<div className="calculator__products">
					<span
						className={`calculator__product ${!isCredit && 'calculator__product_active'}`}
						onClick={chooseDeposit}
						role="presentation"
					>
						Вклады
					</span>
					<span
						className={`calculator__product ${isCredit && 'calculator__product_active'}`}
						onClick={chooseCredit}
						role="presentation"
					>
						Кредиты
					</span>
					<div className="calculator__slider" ref={sliderRef} />
				</div>
				<form>
					<div className="calculator__calculation">
						<div className="calculator__items">
							{!isCredit ? (
								<>
									<Select
										name="currency"
										placeHolder="Сумма вклада"
										options={['₽', '$', '€', '¥']}
										defaultValue="240000"
										getValue={getCurrency}
										max="10000000"
									/>
									<Range
										name="term"
										placeHolder="Срок в месяцах"
										min={1}
										max={100}
										startValue={12}
									/>
								</>
							) : (
								<>
									<Select
										name="summ"
										placeHolder="Сумма кредита"
										options={['₽', '$', '€', '¥']}
										defaultValue="240000"
										getValue={getCurrency}
										max="10000000"
									/>
									<Range name="term" placeHolder="Срок в годах" min={1} max={30} startValue={10} />
								</>
							)}
						</div>
						<div className="calculator__results">
							<div className="calculator__results-display">
								{!isCredit ? (
									<>
										<div className="calculator__result">
											<span className="calculator__result-name">Ставка:</span>
											<span className="calculator__result-value">до 15,03 %</span>
										</div>
										<div className="calculator__result">
											<span className="calculator__result-name">Доход за период:</span>
											<span className="calculator__result-value">до 50 690 {currency}</span>
										</div>
										<div className="calculator__result">
											<span className="calculator__result-name">Доход за год:</span>
											<span className="calculator__result-value">до 50 690 {currency}</span>
										</div>
									</>
								) : (
									<>
										<div className="calculator__result">
											<span className="calculator__result-name">Платеж от:</span>
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
