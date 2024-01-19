import React, { useState } from 'react';
import { Promo, DepositsCardList, DepositFilter } from '../../components';
import { useLocation } from 'react-router-dom';

function Deposits() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const location = useLocation();
	const isDeposits = location.pathname === '/deposits';

	return (
		<>
			<Promo
				deposits={isDeposits}
				title={isDeposits ? 'Вклады c высоким процентом' : 'Подбор кредита'}
				subtitle={
					!isDeposits
						? 'Подберём банки, которые готовы выдать вам кредит по выгодной ставке'
						: window.innerWidth < 705
						? 'Сервис сравнения банковских депозитов позволяет мгновенно найти лучшие предложения по вкладам'
						: 'Сервис сравнения банковских депозитов позволяет мгновенно найти лучшие предложения по вкладам с выгодными условиями и высокой процентной ставкой'
				}

				// "Сервис сравнения банковских депозитов позволяет мгновенно найти лучшие предложения
				// по&nbsp;вкладам с&nbsp;выгодными условиями и&nbsp;высокой процентной ставкой"
			/>
			<DepositFilter isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
			<DepositsCardList isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
		</>
	);
}

export default Deposits;
