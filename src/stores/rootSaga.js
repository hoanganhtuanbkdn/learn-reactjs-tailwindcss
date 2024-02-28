import { takeLatest, all } from 'redux-saga/effects';
import { loginRequest } from './reducers/usersReducer';
import { loginSaga } from './sagas/usersSaga';

export default function* rootSaga() {
	yield all([
		takeLatest(loginRequest.type, loginSaga),
		//
		//
		//
	]);
}
