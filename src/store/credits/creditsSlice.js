const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
	credits: [],
	error: false,
	isLoading: false,
	message: '',
	totalElements: 0,
};

export const loadCredits = createAsyncThunk(
	'@@credits/load-credits',
	async (data, { extra: { client, api } }) => {
		return client.get(api.getCredits(data));
	}
);

const creditsSlice = createSlice({
	name: '@@credits',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadCredits.pending, (state) => {
				state.message = null;
				state.error = false;
				state.isLoading = true;
			})
			.addCase(loadCredits.rejected, (state, action) => {
				state.error = true;
				state.message = action.error.message;
				state.isLoading = false;
			})
			.addCase(loadCredits.fulfilled, (state, action) => {
				state.error = false;
				state.isLoading = false;
				state.credits = action.payload.data.calculatedCredits;
				state.totalElements = action.payload.data.totalElements;
				state.message = null;
			});
	},
});

export const creditsReducer = creditsSlice.reducer;
