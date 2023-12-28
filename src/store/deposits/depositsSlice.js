const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
	deposits: [],
	error: false,
	isLoading: false,
	message: '',
};

export const loadDeposits = createAsyncThunk(
	'@@deposits/load-deposits',
	async (data, { extra: { client, api } }) => {
		return client.get(api.getDeposits(data));
	}
);

const depositsSlice = createSlice({
	name: '@@deposits',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadDeposits.pending, (state) => {
				state.message = null;
				state.error = false;
				state.isLoading = true;
			})
			.addCase(loadDeposits.rejected, (state, action) => {
				state.error = true;
				state.message = action.error.message;
				state.isLoading = false;
			})
			.addCase(loadDeposits.fulfilled, (state, action) => {
				state.error = false;
				state.isLoading = false;
				state.deposits = action.payload.data;
				state.message = null;
			});
	},
});

export const depositsReducer = depositsSlice.reducer;
