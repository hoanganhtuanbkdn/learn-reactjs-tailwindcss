const initialState = {
	user: {
		email: null,
	},
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: {
					email: action.email,
				},
			};

		default:
			return state;
	}
};

export default reducer;
