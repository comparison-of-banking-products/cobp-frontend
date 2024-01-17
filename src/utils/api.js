const BASE_URL = 'http://80.87.107.99:8080/';

export const getDeposits = ({
	amount,
	term,
	capitalization = false,
	replenishment = false,
	partialWithdrawal = false,
	banks = null,
}) => {
	const capitalizationParam = capitalization ? '&capitalization=true' : '';
	const replenishmentParam = replenishment ? '&replenishment=true' : '';
	const partialWithdrawalParam = partialWithdrawal ? '&partialWithdrawal=true' : '';

	const banksParam = banks === null ? [] : banks.length > 0 ? banks.map((bank) => bank.bic) : [0];
	return (
		BASE_URL +
		`v1/calculators/deposits?amount=${amount}&term=${term}${capitalizationParam}${replenishmentParam}${partialWithdrawalParam}&bics=${banksParam}`
	);
};

export const getCredits = ({
	amount,
	term,
	// capitalization,
	// replenishment,
	// partialWithdrawal,
	banks = null,
}) => {
	// const capitalizationParam = capitalization ? '&=true' : '';
	// const replenishmentParam = replenishment ? '&=true' : '';
	// const partialWithdrawalParam = partialWithdrawal ? '&=true' : '';

	const banksParam = banks === null ? [] : banks.length > 0 ? banks.map((bank) => bank.bic) : [0];

	return BASE_URL + `v1/calculators/credits?amount=${amount}&term=${term}&bics=${banksParam}`;
};

export const getBanksList = () => {
	return BASE_URL + `v1/banks`;
};
