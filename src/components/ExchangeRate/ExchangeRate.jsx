function ExchangeRate(valute) {
	console.log(valute);
	return (
		<>
			<li className="exchange-rate__about-currency-item">
				<p className="exchange-rate__difference"></p>
				<p className="exchange-rate__difference-image exchange-rate__difference-image_up" />
			</li>
		</>
		// <li className="exchange-rate__about-currency-item">
		//   {props.id === 1 &&
		//   <p className="exchange-rate__difference">{props.rate.rate}</p>}
		//   <p className="exchange-rate__difference-image exchange-rate__difference-image_up" />
		// </li>
	);
}

export default ExchangeRate;

// {(props.id === 2 || props.id === 4 || props.id === 5) &&
//   <li className="exchange-rate__about-currency-item">
//     <p className="exchange-rate__difference">{props.rate.base} {props.rate.rate}</p>
//     {props.rate.diff > '0' ? <p className="exchange-rate__difference-image exchange-rate__difference-image_up" />
//     : props.rate.diff < '0' ? <p className="exchange-rate__difference-image exchange-rate__difference-image_down" /> : []}
//     {/* <p className="exchange-rate__difference-image exchange-rate__difference-image_up" /> */}
//   </li>
