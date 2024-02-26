export const login = (email) => {
	return {
		type: 'LOGIN',
		email,
	};
};
