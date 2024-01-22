import React, { useState, useEffect } from 'react';
import { Promo, DepositsCardList, DepositFilter } from '../../components';
import { useLocation } from 'react-router-dom';

function Deposits() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const location = useLocation();
	const isDeposits = location.pathname === '/deposits';

	const fromCalculatorButton = location.state && location.state.fromCalculatorButton;

	return (
		<>
			<Promo deposits={isDeposits} />
			<DepositFilter isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
			<DepositsCardList isSubmitted={fromCalculatorButton ? true : isSubmitted} />
		</>
	);
}

export default Deposits;
