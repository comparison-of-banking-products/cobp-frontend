import React, { useState } from 'react';
import { Promo } from '../../components';
import { CreditFilter } from '../../components';
import { useLocation } from 'react-router-dom';

function Credits() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const location = useLocation();

	const fromCalculatorButton = location.state && location.state.fromCalculatorButton;

	return (
		<>
			<Promo deposits={false} />
			<CreditFilter isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
			{/* <CreditCardList isSubmitted={fromCalculatorButton ? true : isSubmitted} /> */}
		</>
	);
}

export default Credits;
