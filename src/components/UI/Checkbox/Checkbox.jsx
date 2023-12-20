import React from 'react';

function Checkbox({ type, checkboxClass, name, onChange, required }) {
	return (
		<input
			type={type}
			className={checkboxClass}
			name={name}
			onChange={onChange}
			required={required}
		/>
	);
}

export default Checkbox;
