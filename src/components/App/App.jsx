import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import Deposits from '../../pages/Deposits/Deposits';
import Credits from '../../pages/Credits/Credits';
import Calculator from '../../pages/Calculator/Calculator';
import Exchanges from '../../pages/Exchanges/Exchanges';

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
