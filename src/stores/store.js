import { combineReducers, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

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

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

let persistor = persistStore(store);

export { store, persistor };
