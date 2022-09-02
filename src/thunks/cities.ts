import { Dispatch } from 'redux';
import { getCitiesFetch } from '../api';
import { getCities } from '../store/modules/cities';

export const getCitiesThunk = () => async (dispatch: Dispatch) => {
	const response = await getCitiesFetch();
	if (response) {
		dispatch(getCities(response));
	}
};
