const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
	depositAmount: 240000,
	depositTerm: 5,
	creditAmount: 240000,
	creditTerm: 6,
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
