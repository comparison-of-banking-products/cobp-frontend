import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageNotFound } from '../src/components';
import { Main, Deposits, Credits, Calculator, Exchanges } from './pages';

function App() {
	return (
		<div className="page">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/deposits" element={<Deposits />} />
				<Route path="/credits" element={<Credits />} />
				<Route path="/calculator" element={<Calculator />} />
				<Route path="/exchanges" element={<Exchanges />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
