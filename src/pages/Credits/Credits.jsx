import React, { useState } from 'react';
import { Promo } from '../../components';
import { CreditFilter } from '../../components';
import { useLocation } from 'react-router-dom';
//import { CreditsCardList } from '../../components';

function Credits() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const location = useLocation();

	const fromCalculatorButton = location.state && location.state.fromCalculatorButton;

	return (
		<>
			<Promo deposits={false} />
			<CreditFilter
				isSubmitted={fromCalculatorButton ? true : isSubmitted}
				setIsSubmitted={setIsSubmitted}
			/>
			{/* <CreditsCardList isSubmitted={fromCalculatorButton ? true : isSubmitted} /> */}
		</>
	);
}

export default Credits;
