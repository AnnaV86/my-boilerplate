import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../selectors/users';
import { getUsersThunk } from '../../thunks';

import style from './main.module.css';

export const Main = () => {
	const dispatch = useDispatch();
	const users = useSelector(getUsers);

	useEffect(() => {
		dispatch(getUsersThunk());
	}, []);

	return (
		<section className={style.main}>
			{users.map(user => (
				<div key={user.id}>
					<h6>{user.name}</h6>
					<p>{user.age}</p>
				</div>
			))}
		</section>
	);
};
