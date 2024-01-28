import React, { useState, useEffect } from 'react';
import { Promo, DepositsCardList, DepositFilter } from '../../components';
import { useLocation } from 'react-router-dom';
import { initialVisibleCount } from '../../utils/constants';

function Deposits() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const location = useLocation();
	const isDeposits = location.pathname === '/deposits';

	const fromCalculatorButton = location.state && location.state.fromCalculatorButton;

	const [visibleCards, setVisibleCards] = useState(initialVisibleCount);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Promo deposits={isDeposits} />
			<DepositFilter
				isSubmitted={fromCalculatorButton ? true : isSubmitted}
				setIsSubmitted={setIsSubmitted}
				setVisibleCards={setVisibleCards}
			/>
			<DepositsCardList
				isSubmitted={fromCalculatorButton ? true : isSubmitted}
				visibleCards={visibleCards}
				setVisibleCards={setVisibleCards}
			/>
		</>
	);
}

export default Deposits;
