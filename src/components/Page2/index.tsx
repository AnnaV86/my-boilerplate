import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../../selectors/cities';
import { getCitiesThunk } from '../../thunks';

import style from './page2.module.scss';

export const Page2 = () => {
	const dispatch = useDispatch();
	const users = useSelector(getCities);

	useEffect(() => {
		dispatch(getCitiesThunk());
	}, []);

	return (
		<section className={style.page2}>
			{users.map(city => (
				<div key={city.id}>
					<h6>{city.city}</h6>
					<p>{city.population}</p>
				</div>
			))}
		</section>
	);
};
