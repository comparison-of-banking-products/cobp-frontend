import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageNotFound, Header, Footer } from '../src/components';
import {
	Main,
	Deposits,
	Credits,
	DebitCard,
	CreditCard,
	Calculator,
	Exchanges,
	Profile,
} from './pages';

function App() {
	return (
		<div className="page">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/deposits" element={<Deposits />} />
				<Route path="/credits" element={<Credits />} />
				<Route path="/debitcard" element={<DebitCard />} />
				<Route path="/creditcard" element={<CreditCard />} />
				<Route path="/calculator" element={<Calculator />} />
				<Route path="/exchanges" element={<Exchanges />} />
				<Route path="/Profile" element={<Profile />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
