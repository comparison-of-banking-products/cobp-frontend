import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadExchangeRate } from '../../store/exchangeRate/exchangeRateSlice';
import ExchangeRate from '../ExchangeRate/ExchangeRate';

function ExchangeRateList() {
	const dispatch = useDispatch();
	const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
	useEffect(() => {
		dispatch(loadExchangeRate({}));
	}, []);
	console.log(exchangeRate[0].base);
	const selectedCurrencies = ['USD', 'EUR', 'CNY'];
	const ddddd = [];
	const ab = selectedCurrencies.map((selectedCurrency) => {
		exchangeRate.find((v) => v === 'USD');
	});
	console.log(ab);

	return (
		<section className="exchange-rate">
			<h2 className="exchange-rate__title">Курс биржи</h2>
			<div className="exchange-rate__container">
				<div className="exchange-rate__information">
					<ul className="exchange-rate__about-currency-list">
						{
							selectedCurrencies.map((selectedCurrency) => {
								const valute = exchangeRate.find((v) => v === selectedCurrency);
								<ExchangeRate valute={valute} />;
							})

							// exchangeRate.map((rate, index) => (
							// 	<ExchangeRate
							// 		key={index}
							// 		id={index}
							// 		rate={rate}
							// 	/>
							// ))
						}
						{/* <li className="exchange-rate__about-currency-item">
							<p className="exchange-rate__difference">USD 88,16 0,29</p>
							<p className="exchange-rate__difference-image exchange-rate__difference-image_no-changes" />
						</li>
						<li className="exchange-rate__about-currency-item">
							<p className="exchange-rate__difference">EUR 96,15 0,11</p>
							<p className="exchange-rate__difference-image exchange-rate__difference-image_up" />
						</li>
						<li className="exchange-rate__about-currency-item">
							<p className="exchange-rate__difference">CNY 96,15 0,11</p>
							<p className="exchange-rate__difference-image exchange-rate__difference-image_down" />
						</li> */}
					</ul>
				</div>
				<Link className="exchange-rate__converter-link">конвертер валют</Link>
			</div>
		</section>
	);
}

export default ExchangeRateList;
