import { Dispatch } from 'redux';
import { getUsersFetch } from '../api';
import { getUsers } from '../store/modules/users';

export const getUsersThunk = () => async (dispatch: Dispatch) => {
	const users = await getUsersFetch();

	if (users) {
		dispatch(getUsers(users));
	}
};
