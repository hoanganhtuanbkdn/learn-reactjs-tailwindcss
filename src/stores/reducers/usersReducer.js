import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	email: null,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		loginRequest(state, action) {
			const { email } = action.payload;
			state.email = email;
		},
		logoutRequest(state) {
			state.email = null;
		},
	},
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { loginRequest, logoutRequest } = usersSlice.actions;

// Export the slice reducer as the default export
export default usersSlice.reducer;
