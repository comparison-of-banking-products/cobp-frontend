import React from 'react';
import { Promo } from '../../components';
import { CreditFilter } from '../../components';

function Credits() {
	return (
		<>
			<Promo
				title="Подбор кредита"
				subtitle="Подберём банки, которые готовы выдать кредит по выгодной для вас ставке"
			/>
			<CreditFilter />
		</>
	);
}

export default Credits;
