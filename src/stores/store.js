import { combineReducers, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
// import postsReducer from '../reducers/postsReducer';
import usersReducer from './reducers/usersReducer';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	// posts: postsReducer,
	users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

export { store, persistor };
