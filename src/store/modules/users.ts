import { createAction, createReducer } from '@reduxjs/toolkit';
import {
	ADD_USERS,
	DELETE_USER,
	GET_USERS,
	UPDATE_USER,
	User
} from '../models';

export const getUsers = createAction<Array<User>>(GET_USERS);
export const addUsers = createAction<User>(ADD_USERS);
export const deleteUser = createAction<string>(DELETE_USER);
export const updateUser = createAction<User>(UPDATE_USER);

export const usersReducer = createReducer(Array<User>, builder => {
	builder
		.addCase(getUsers, (state, action) => action.payload)
		.addCase(addUsers, (state, action) => state.concat(action.payload))
		.addCase(deleteUser, (state, action) =>
			state.filter(user => user.id !== action.payload)
		)
		.addCase(updateUser, (state, action) =>
			state.map(user =>
				user.id === action.payload.id ? action.payload : user
			)
		);
});
