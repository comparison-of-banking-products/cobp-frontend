import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadExchangeRate } from '../../store/exchangeRate/exchangeRateSlice';
import ExchangeRate from '../ExchangeRate/ExchangeRate';

function ExchangeRateList() {
	const dispatch = useDispatch();
	const exchangeRate = useSelector((state) => state.exchangeRate.exchangeRate);
	const selectedCurrencies = ['USD', 'EUR', 'JPY'];

	useEffect(() => {
		dispatch(loadExchangeRate({}));
	}, []);

	return (
		<section className="exchange-rate">
			<h2 className="exchange-rate__title">Курс биржи</h2>
			<div className="exchange-rate__container">
				<ul className="exchange-rate__currency-list">
					{selectedCurrencies.map((selectedCurrency) => {
						const valute = exchangeRate.find((v) => v.base === selectedCurrency);
						return <ExchangeRate key={selectedCurrency} valute={valute} />;
					})}
				</ul>
				<Link className="exchange-rate__converter-link">конвертер валют</Link>
			</div>
		</section>
	);
}

export default ExchangeRateList;
