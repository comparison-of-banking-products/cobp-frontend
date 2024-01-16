const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
	banksList: [],
	error: false,
	isLoading: false,
	message: '',
};

export const loadBanksList = createAsyncThunk(
	'@@banksList/load-banks-list',
	async (_, { extra: { client, api } }) => {
		return client.get(api.getBanksList());
	}
);

const banksListSlice = createSlice({
	name: '@@banksList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadBanksList.pending, (state) => {
				state.message = null;
				state.error = false;
				state.isLoading = true;
			})
			.addCase(loadBanksList.rejected, (state, action) => {
				state.error = true;
				state.message = action.error.message;
				state.isLoading = false;
			})
			.addCase(loadBanksList.fulfilled, (state, action) => {
				state.error = false;
				state.isLoading = false;
				state.banksList = action.payload.data;
				state.message = null;
			});
	},
});

export const banksListReducer = banksListSlice.reducer;
