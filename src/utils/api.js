const BASE_URL = 'http://80.87.107.99:8080/';

export const getDeposits = ({amount, term, capitalization, replenishment, partialWithdrawal}) => {
	const capitalizationParam = capitalization ? '&capitalization=true' : '';
    const replenishmentParam = replenishment ? '&replenishment=true' : '';
    const partialWithdrawalParam = partialWithdrawal ? '&partialWithdrawal=true' : '';

	return BASE_URL + `v1/calculators/deposits?amount=${amount}&term=${term}${capitalizationParam}${replenishmentParam}${partialWithdrawalParam}`;
}

export const getBanksList = ({}) => {
	return BASE_URL + `v1/banks`;
}
	
