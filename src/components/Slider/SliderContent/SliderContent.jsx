import React from 'react';
import { Link } from 'react-router-dom';

function SliderContent({ sliderTitle, sliderSubtitle, linkPage, textLink, inactive }) {
	return (
		<div className="slider__content">
			<h2 className="slider__title">{sliderTitle}</h2>
			<p className="slider__subtitle">{sliderSubtitle}</p>
			<Link
				to={linkPage}
				// TODO: удалить inactive когда будут все страницы
				className={`slider__button button__primary ${inactive ? 'button__primary_inactive' : ''}`}
			>
				{textLink}
			</Link>
		</div>
	);
}

export default SliderContent;
