import React from 'react';

function Input({ textInput, inputClass, name, type, onClick, disabled }) {
	return (
		<input
			name={name}
			type={type}
			//заменить потом на пропс
			className="input__primary"
			onClick={onClick}
			//заменить потом на пропс
			value="поиск по названию банка"
			disabled={disabled}
		>
			{textInput}
		</input>
	);
}

export default Input;

// className={inputClass}
