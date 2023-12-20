import { useEffect, useRef, useState } from 'react';
import arrowDown from '../../../vendor/images/icons/chevron-bottom.svg';

function Select({ placeHolder, options, name, getValue }) {
	// Поле с выбором опций

	// placeHolder (type: string) - плейстхолдер поля инпут
	// name (type: string) - имя поля инпут, будет использованна при событии submit формы
	// option (type: object, instanceof Array) - набор опций для поля
	// getValue(value) (type: function) - функция, возвращает значение поля и ползунка

	const [value, setValue] = useState(options[0]);

	useEffect(() => {
		!!getValue && getValue(value);
	}, []);

	const optionsRef = useRef();

	const toggleOptions = () => {
		optionsRef.current.classList.toggle('select__options_active');
	};

	const handleChange = (e) => {
		setValue(e.target.textContent);
		!!getValue && getValue(e.target.textContent);
		toggleOptions();
	};

	return (
		<div className="select">
			<div className="select__text">
				<span className="select__placeholder">{placeHolder}</span>
				<input className="select__input" value={value} name={name} readOnly />
				<div className="select__options" ref={optionsRef}>
					{options.map((option, index) => (
						<p key={index} className="select__option" onClick={handleChange}>
							{option}
						</p>
					))}
				</div>
			</div>
			<div className="select__arrow">
				<div
					className="select__icon"
					style={{ backgroundImage: `url(${arrowDown})` }}
					onClick={toggleOptions}
				/>
			</div>
		</div>
	);
}

export default Select;
