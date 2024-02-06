//const BASE_URL = 'https://benchmark.acceleratorpracticum.ru/api/';
const BASE_URL = 'http://80.87.107.99:8080/';

export const getDeposits = ({
	amount,
	term,
	capitalization = false,
	replenishment = false,
	partialWithdrawal = false,
	banks = null,
	page = 0,
	size = 100,
}) => {
	const capitalizationParam = capitalization ? '&capitalization=true' : '';
	const replenishmentParam = replenishment ? '&replenishment=true' : '';
	const partialWithdrawalParam = partialWithdrawal ? '&partialWithdrawal=true' : '';

	const banksParam = banks === null ? [] : banks.length > 0 ? banks.map((bank) => bank.bic) : [0];
	return (
		BASE_URL +
		`v1/calculators/deposits?amount=${amount}&term=${term}${capitalizationParam}${replenishmentParam}${partialWithdrawalParam}&bics=${banksParam}&page=${page}&size=${size}`
	);
};

export const getCredits = ({
	amount,
	term,
	creditOnline = false,
	onlineApprove = false,
	collateral = false,
	banks = null,
}) => {
	const creditOnlineParam = creditOnline ? '&creditOnline=true' : '';
	const onlineApproveParam = onlineApprove ? '&onlineApprove=true' : '';
	const collateralParam = collateral ? '&collateral=true' : '';

	const banksParam = banks === null ? [] : banks.length > 0 ? banks.map((bank) => bank.bic) : [0];

	return (
		BASE_URL +
		`v1/calculators/credits?amount=${amount}&term=${term}${creditOnlineParam}${onlineApproveParam}${collateralParam}&bics=${banksParam}`
	);
};

export const getBanksList = ({ sort }) => {
	return BASE_URL + `v1/banks?sort=${sort}`;
};

export const getLogoName = (logoName) => {
	return BASE_URL + `v1/banks/logo/${logoName}`;
};

export const getExchangeRate = () => {
	return BASE_URL + `v1/currencies/rates`;
};
