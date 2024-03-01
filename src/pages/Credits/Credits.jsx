import React, { useState, useEffect } from 'react';
import { Promo } from '../../components';
import { CreditsCardList } from '../../components';
import { CreditFilter } from '../../components';
import { useLocation } from 'react-router-dom';
import { initialVisibleCount } from '../../utils/constants';

function Credits() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const location = useLocation();
	//const isCredits = location.pathname === '/credits';

	const fromCalculatorButton = location.state && location.state.fromCalculatorButton;

	const [visibleCards, setVisibleCards] = useState(initialVisibleCount);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Promo deposits={false} />
			<CreditFilter
				isSubmitted={fromCalculatorButton ? true : isSubmitted}
				setIsSubmitted={setIsSubmitted}
				setVisibleCards={setVisibleCards}
			/>
			<CreditsCardList
				isSubmitted={fromCalculatorButton ? true : isSubmitted}
				visibleCards={visibleCards}
				setVisibleCards={setVisibleCards}
			/>
		</>
	);
}

export default Credits;
