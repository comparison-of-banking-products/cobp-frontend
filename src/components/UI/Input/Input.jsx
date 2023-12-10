import React from 'react';

function Input({ value, inputClass, name, type, onClick, disabled }) {
	return (
		<input
			name={name}
			type={type}
			className={inputClass}
			onClick={onClick}
			value={value}
			disabled={disabled}
		/>
	);
}

export default Input;
