import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, BurgerMenu } from '../index';

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleMenuClick() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="header__logo" />
				<Navigation />
				<div className="header__buttons">
					<button type="button" className="header__search-btn" disabled />
					<Link to="/profile" className="header__profile-btn" />
					<button className="header__burger-btn" onClick={handleMenuClick}></button>
				</div>

				<BurgerMenu isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
			</div>
		</header>
	);
}

export default Header;
