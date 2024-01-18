function ExchangeRate({ valute }) {
	let imageRates = 'exchange-rate__difference-image_no-changes';

	if (valute.diff > 0) {
		imageRates = 'exchange-rate__difference-image_up';
	} else if (valute.diff < 0) {
		imageRates = 'exchange-rate__difference-image_down';
	}

	return (
		<>
			<li className="exchange-rate__currency-item">
				<p className="exchange-rate__difference">
					{`${valute.base}
            ${valute.rate.toFixed(2).replace('.', ',')}
            ${valute.diff.toFixed(2).replace('.', ',')}`}
				</p>
				<p className={`exchange-rate__difference-image ${imageRates}`} />
			</li>
		</>
	);
}

export default ExchangeRate;
