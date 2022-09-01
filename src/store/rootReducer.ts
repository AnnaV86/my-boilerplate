import { combineReducers } from '@reduxjs/toolkit';
import { citiesReducer } from './modules/cities';
import { usersReducer } from './modules/users';

export const rootReducer = combineReducers({
	users: usersReducer,
	cities: citiesReducer
});
