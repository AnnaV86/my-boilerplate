export interface User {
	id: string;
	name: string;
	age: number;
}

export const GET_USERS = 'GET_USERS';
export const ADD_USERS = 'ADD_USERS';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
