import React from 'react';

function Checkbox({ type, checkboxClass, name, onChange, required, checked }) {
	return (
		<input
			type={type}
			className={checkboxClass}
			name={name}
			onChange={onChange}
			required={required}
			checked={checked}
		/>
	);
}

export default Checkbox;
