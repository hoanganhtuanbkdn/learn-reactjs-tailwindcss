import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	email: null,
	fetching: false,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		loginRequest(state, action) {
			state.fetching = true;
		},
		loginSuccess(state, action) {
			const { email } = action.payload;
			state.fetching = false;
			state.email = email;
		},
		loginFailure(state, action) {
			state.fetching = false;
		},
		logoutRequest(state) {
			state.email = null;
		},
	},
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { loginRequest, loginSuccess, loginFailure, logoutRequest } =
	usersSlice.actions;

// Export the slice reducer as the default export
export default usersSlice.reducer;
