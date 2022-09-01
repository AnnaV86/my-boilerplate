import { createAction, createReducer } from '@reduxjs/toolkit';
import {
	ADD_CITIES,
	City,
	DELETE_CITY,
	GET_CITIES,
	UPDATE_CITY
} from '../models';

export const getCities = createAction<Array<City>>(GET_CITIES);
export const addCities = createAction<City | Array<City>>(ADD_CITIES);
export const deleteCity = createAction<string>(DELETE_CITY);
export const updateCity = createAction<City>(UPDATE_CITY);

export const citiesReducer = createReducer(Array<City>, builder => {
	builder
		.addCase(getCities, (state, action) => action.payload)
		.addCase(addCities, (state, action) => state.concat(action.payload))
		.addCase(deleteCity, (state, action) =>
			state.filter(city => city.id !== action.payload)
		)
		.addCase(updateCity, (state, action) =>
			state.map(city =>
				city.id === action.payload.id ? action.payload : city
			)
		);
});
