import { getUsersFetch } from '../api';
import { getUsers } from '../store/modules/users';

export const getUsersThunk = () => async dispatch => {
	const response = await getUsersFetch();
	console.log(response);
	if (response) {
		dispatch(getUsers(response));
	}
};
