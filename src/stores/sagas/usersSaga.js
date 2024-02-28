import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { loginFailure, loginSuccess } from '../reducers/usersReducer';

const login = () => {
	//
	// fetch(`http://localhost:4000/users?email=${email}&password=${password}`)
	// 		.then((raw) => raw.json())
	// 		.then((response) => {
	// 			// Nếu email và password đúng thì response sẽ trả về kết quả
	// 			// Nếu email và password sai, response sẽ trả về mảng rỗng.
	// 			if (response.length > 0) {
	// 				// Lưu email vào context
	// 				// setUserEmail(email);
	// 				dispatch(loginRequest({ email }));
	// 				alert('Login Successful');
	// 				navigate('/');
	// 			} else {
	// 				return alert('Email or Password incorrect');
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			return alert(error.message);
	// 		});
};

export function* loginSaga(action) {
	const { email, password } = action.payload;
	try {
		const user = yield call(login, { email, password });
		yield put(loginSuccess, { email: email });
	} catch (e) {
		yield put(loginFailure);
	}
}
