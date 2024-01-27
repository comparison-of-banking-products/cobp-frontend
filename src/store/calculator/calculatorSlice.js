const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
	depositAmount: 100000,
	depositTerm: 3,
	creditAmount: 100000,
	creditTerm: 3,
	currency: '₽',
	isCredit: false,
};

const calculatorSlice = createSlice({
	name: '@@calculator',
	initialState,
	reducers: {
		editCalculatorValues: (state, action) => {
			return { ...state, ...action.payload };
		},
	},
});

export const { editCalculatorValues } = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
