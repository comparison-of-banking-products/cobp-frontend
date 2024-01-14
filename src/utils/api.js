const BASE_URL = 'http://80.87.107.99:8080/';

export const getDeposits = ({
	amount,
	term,
	capitalization,
	replenishment,
	partialWithdrawal,
	banks,
}) => {
	const capitalizationParam = capitalization ? '&capitalization=true' : '';
	const replenishmentParam = replenishment ? '&replenishment=true' : '';
	const partialWithdrawalParam = partialWithdrawal ? '&partialWithdrawal=true' : '';
	const banksParam =
		banks.length > 0 ? `&banks=${banks.map((bank) => bank.bic).join(',')}` : `&banks=000000000`;
	console.log('banksParam', banksParam);

	return (
		BASE_URL +
		`v1/calculators/deposits?amount=${amount}&term=${term}${capitalizationParam}${replenishmentParam}${partialWithdrawalParam}${banksParam}`
	);
};

export const getBanksList = ({}) => {
	return BASE_URL + `v1/banks`;
};
