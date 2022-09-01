import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { NavBar } from './components/NavBar';
import { Page2 } from './components/Page2';

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
