import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	const getNavLinkClass = ({ isActive }) =>
		isActive ? 'header__link header__link_active' : 'header__link';

	return (
		<>
			<nav className="header__links">
				<NavLink to="/deposits" className={getNavLinkClass}>
					Вклады
				</NavLink>
				<NavLink to="/credits" className={getNavLinkClass}>
					Кредиты
				</NavLink>
				<NavLink to="/debitcard" className="header__link header__link_disabled">
					Дебетовые карты
				</NavLink>
				<NavLink to="/creditcard" className="header__link header__link_disabled">
					Кредитные карты
				</NavLink>
			</nav>
		</>
	);
}

export default Navigation;
