import React from 'react';
import { PromoDeposits, DepositsCardList, DepositFilter } from '../../components';

function Deposits() {
	return (
		<>
			<PromoDeposits />
			<DepositFilter />
			<DepositsCardList />
		</>
	);
}

export default Deposits;
