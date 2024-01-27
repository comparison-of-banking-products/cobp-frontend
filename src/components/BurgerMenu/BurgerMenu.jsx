import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { linksData } from '../../utils/linksData';

function BurgerMenu({ isMenuOpen, handleMenuClick }) {
	const getNavLinkClass = ({ isActive }) =>
		isActive ? 'burger-menu__link burger-menu__link_active' : 'burger-menu__link';

	return (
		<div
			className={`burger-menu burger-menu__overlay ${
				isMenuOpen ? 'burger-menu__overlay_active' : ''
			}`}
		>
			<div className="burger-menu__container">
				<div className="burger-menu__head">
					<Link to="/" className="header__logo" onClick={handleMenuClick} />
					<button className="burger-menu__close-btn" onClick={handleMenuClick} />
				</div>
				<div className="burger-menu__content">
					<nav className="burger-menu__links">
						{linksData.slice(linksData[0].id, linksData[4].id).map((link) => (
							<NavLink
								className={getNavLinkClass}
								to={link.page}
								key={link.id}
								onClick={handleMenuClick}
							>
								{link.title}
							</NavLink>
						))}
					</nav>
					<nav className="burger-menu__links">
						{linksData.slice(linksData[4].id).map((link) => (
							<NavLink
								className={getNavLinkClass}
								to={link.page}
								key={link.id}
								onClick={handleMenuClick}
							>
								{link.title}
							</NavLink>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
}

export default BurgerMenu;
