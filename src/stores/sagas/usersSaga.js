import { call, put } from 'redux-saga/effects';
import { loginFailure, loginSuccess } from '../reducers/usersReducer';

const login = async ({ email, password }) => {
	const raw = await fetch(
		`http://localhost:4000/users?email=${email}&password=${password}`
	);

	const res = await raw.json();

	return res;
};

export function* loginSaga(action) {
	const { email, password, navigate } = action.payload;
	try {
		const users = yield call(login, { email, password });
		if (users?.length > 0) {
			alert('Login Successful');
			navigate('/');
			yield put(loginSuccess({ email: email }));
		} else {
			alert('Email or Password is incorrect');
			yield put(loginFailure());
		}
	} catch (error) {
		alert(error.message);
		yield put(loginFailure());
	}
}
