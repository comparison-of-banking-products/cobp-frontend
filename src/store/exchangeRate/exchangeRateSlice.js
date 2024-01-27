const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
	exchangeRate: [],
	error: false,
	isLoading: false,
	message: '',
};

export const loadExchangeRate = createAsyncThunk(
	'@@exchangeRate/load-exchange-rate',
	async (_, { extra: { client, api } }) => {
		return client.get(api.getExchangeRate());
	}
);

const exchangeRateSlice = createSlice({
	name: '@@exchangeRate',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadExchangeRate.pending, (state) => {
				state.message = null;
				state.error = false;
				state.isLoading = true;
			})
			.addCase(loadExchangeRate.rejected, (state, action) => {
				state.error = true;
				state.message = action.error.message;
				state.isLoading = false;
			})
			.addCase(loadExchangeRate.fulfilled, (state, action) => {
				state.error = false;
				state.isLoading = false;
				state.exchangeRate = action.payload.data;
				state.message = null;
			});
	},
});

export const exchangeRateReducer = exchangeRateSlice.reducer;
