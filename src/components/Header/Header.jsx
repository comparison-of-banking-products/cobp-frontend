import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, BurgerMenu } from '../index';

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="header__logo" />
				<Navigation />
				<div className="header__buttons">
					<button type="button" className="header__search-btn" disabled />
					<Link to="/profile" className="header__link header__profile" />
				</div>

				{/* TODO: */}
				{/* <BurgerMenu /> */}
			</div>
		</header>
	);
}

export default Header;
