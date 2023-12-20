import React from 'react';

function Input({ value, inputClass, name, type, onClick, disabled, onChange, placeholder }) {
	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<input
			name={name}
			type={type}
			className={inputClass}
			onClick={onClick}
			value={value}
			disabled={disabled}
			onChange={handleChange}
			placeholder={placeholder}
		/>
	);
}

export default Input;
