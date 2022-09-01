export interface City {
	id: string;
	city: string;
	population: number;
}

export const GET_CITIES = 'GET_CITIES';
export const ADD_CITIES = 'ADD_CITIES';
export const DELETE_CITY = 'DELETE_CITY';
export const UPDATE_CITY = 'UPDATE_CITY';
