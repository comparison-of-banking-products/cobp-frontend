import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	const getNavLinkClass = ({ isActive }) =>
		isActive ? 'header__link header__link_active' : 'header__link';

	return (
		<>
			<nav className="header__links">
				<NavLink to="/deposits" className={getNavLinkClass}>
					вклады
				</NavLink>
				<NavLink to="/credits" className={getNavLinkClass}>
					кредиты
				</NavLink>
				<NavLink to="/debitcard" className="header__link header__link_not-active">
					дебетовые карты
				</NavLink>
				<NavLink to="/creditcard" className="header__link header__link_not-active">
					кредитные карты
				</NavLink>
			</nav>
		</>
	);
}

export default Navigation;
