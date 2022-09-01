import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navbar.module.css';

export const NavBar = () => {
	return (
		<section className={style.navbar}>
			<NavLink className={style.link} to="/">
				Main
			</NavLink>
			<NavLink className={style.link} to="/page">
				Page2
			</NavLink>
		</section>
	);
};
