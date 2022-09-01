import { getResponse } from '../utils/response';

export const getUsersFetch = async () => {
	const response = await fetch('http://localhost:3010/users');
	return await getResponse(response);
};
