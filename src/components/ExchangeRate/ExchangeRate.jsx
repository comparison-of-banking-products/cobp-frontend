function ExchangeRate({ valute }) {
	if (!valute) {
		return null;
	}

	let imageRates = 'exchange-rate__difference-image_no-changes';

	if (valute.diff.toFixed(2) > 0) {
		imageRates = 'exchange-rate__difference-image_up';
	} else if (valute.diff.toFixed(2) < 0) {
		imageRates = 'exchange-rate__difference-image_down';
	}

	const roundedDiff = valute.diff.toFixed(2);
	const displayDiff = Math.abs(roundedDiff) === 0 ? roundedDiff.slice(1) : roundedDiff;

	return (
		<>
			<li className="exchange-rate">
				<p className="exchange-rate__difference">
					{`${valute.base}
            ${valute.rate.toFixed(2).replace('.', ',')}`}
					&nbsp;
					{`
            ${displayDiff.replace('.', ',')}`}
				</p>
				<p className={`exchange-rate__difference-image ${imageRates}`} />
			</li>
		</>
	);
}

export default ExchangeRate;
