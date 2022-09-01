export const getResponse = response => {
	try {
		if (!response.ok) {
			throw new Error(response.status);
		}
		return response.json();
	} catch (err) {
		return err;
	}
};
