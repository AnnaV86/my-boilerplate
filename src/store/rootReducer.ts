import { combineReducers } from '@reduxjs/toolkit';
import { citiesReducer, usersReducer } from './modules';

export const rootReducer = combineReducers({
	users: usersReducer,
	cities: citiesReducer
});
