const BASE_URL = 'http://80.87.107.99:8080/';

export const getDeposits = (data) =>
	BASE_URL + `v1/calculators/deposits?amount=${data.amount}&term=${data.term}`;
