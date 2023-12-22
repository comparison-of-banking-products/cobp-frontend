import { Link } from 'react-router-dom';

function ExchangeRate() {
	return (
		<section className="exchange-rate">
			<h2 className="exchange-rate__title">Курс биржи</h2>
			<div className="exchange-rate__container">
				<div className="exchange-rate__information">
					<ul className="exchange-rate__about-currency-list">
						<li className="exchange-rate__about-currency-item">
							<p className="exchange-rate__difference">USD 88,16 0,29</p>
							{/* Тут будет условие на рост или падение валюты */}
							<p className="exchange-rate__difference-image exchange-rate__difference-image_no-changes" />
						</li>
						<li className="exchange-rate__about-currency-item">
							<p className="exchange-rate__difference">EUR 96,15 0,11</p>
							<p className="exchange-rate__difference-image exchange-rate__difference-image_up" />
						</li>
						<li className="exchange-rate__about-currency-item">
							<p className="exchange-rate__difference">CNY 96,15 0,11</p>
							<p className="exchange-rate__difference-image exchange-rate__difference-image_down" />
						</li>
					</ul>
				</div>
				<Link className="exchange-rate__converter-link">конвертер валют</Link>
			</div>
		</section>
	);
}

export default ExchangeRate;
