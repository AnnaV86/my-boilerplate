import { getResponse } from '../utils/response';

export const getCitiesFetch = async () => {
	const response = await fetch('http://localhost:3010/cities');
	return await getResponse(response);
};
