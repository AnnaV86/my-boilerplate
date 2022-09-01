import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, NavBar, Page2 } from './components';

export const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/page" element={<Page2 />} />
				<Route path="/" element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
};
