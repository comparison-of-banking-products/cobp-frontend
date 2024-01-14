import React, { useState } from 'react';
import { PromoDeposits, DepositsCardList, DepositFilter } from '../../components';

function Deposits() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<>
			<PromoDeposits />
			<DepositFilter isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
			<DepositsCardList isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
		</>
	);
}

export default Deposits;
