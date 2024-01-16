import React, { useState } from 'react';
import { Promo, DepositsCardList, DepositFilter } from '../../components';

function Deposits() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<>
			<Promo
				deposits
				title="Вклады c&nbsp;высоким процентом"
				subtitle="Сервис сравнения банковских депозитов позволяет мгновенно найти лучшие предложения
					по&nbsp;вкладам с&nbsp;выгодными условиями и&nbsp;высокой процентной ставкой"
			/>
			<DepositFilter isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
			<DepositsCardList isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
		</>
	);
}

export default Deposits;
