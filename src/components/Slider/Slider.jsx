import React from 'react';
import { Button } from '../index';

function Slider() {
	const handleClick = () => {
		console.log('asfasfasf');
	};

	return (
		<Button
			type="button"
			btnClass="button__primary button__primary_sm"
			textBtn="подобрать кредит"
			onClick={handleClick}
		/>
	);
}

export default Slider;
