import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { City, User } from './models';
import { rootReducer } from './rootReducer';

export interface IStore {
	users: Array<User>;
	cities: Array<City>;
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk]
});
