import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as api from '../utils/api';
import { persistStore, persistReducer as persReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { depositsReducer } from './deposits/depositsSlice';
import { calculatorReducer } from './calculator/calculatorSlice';
import axios from 'axios';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['calculator'],
	// blacklist: ['deposits']
};

const rootReducer = combineReducers({
	deposits: depositsReducer,
	calculator: calculatorReducer,
});

const persistReducer = persReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
