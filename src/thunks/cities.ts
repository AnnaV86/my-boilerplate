import { getCitiesFetch } from '../api';
import { getCities } from '../store/modules/cities';

export const getCitiesThunk = () => async dispatch => {
	const response = await getCitiesFetch();
	console.log(response);
	if (response) {
		dispatch(getCities(response));
	}
};
