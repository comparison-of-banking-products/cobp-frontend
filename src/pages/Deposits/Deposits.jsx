import React, { useState, useEffect } from 'react';
import { Promo, DepositsCardList, DepositFilter } from '../../components';
import { useLocation } from 'react-router-dom';

function Deposits() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const location = useLocation();
	const isDeposits = location.pathname === '/deposits';

	const fromCalculatorButton = location.state && location.state.fromCalculatorButton;
	//console.log('fromCalculator', fromCalculatorButton);

	return (
		<>
			<Promo
				deposits={isDeposits}
				title={isDeposits ? 'Вклады c высоким процентом' : 'Подбор кредита'}
				subtitle={
					!isDeposits
						? 'Подберём банки, которые готовы выдать вам кредит по выгодной ставке'
						: 'Сервис сравнения банковских депозитов позволяет мгновенно найти лучшие предложения по вкладам'
				}
			/>
			<DepositFilter isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
			<DepositsCardList isSubmitted={fromCalculatorButton ? true : isSubmitted} />
		</>
	);
}

export default Deposits;
