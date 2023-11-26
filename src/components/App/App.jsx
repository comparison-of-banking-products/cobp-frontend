import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';

function App() {
	return (
		<div className="page">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
