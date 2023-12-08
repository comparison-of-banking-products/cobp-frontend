import React from 'react';

function Button({ textBtn, btnClass, type, onClick, disabled }) {
	return (
		<button type={type} className={btnClass} onClick={onClick} disabled={disabled}>
			{textBtn}
		</button>
	);
}

export default Button;
