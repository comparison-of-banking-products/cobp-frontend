import { useEffect, useMemo, useRef, useState } from 'react';
import arrowDown from '../../../vendor/images/icons/chevron-bottom.svg';
// import { Checkbox } from '../../';

function Select({ placeHolder, options, name, getValue, defaultValue, max }) {
	// Поле с выбором опций

	// placeHolder: string - плейстхолдер поля инпут
	// name: string - имя поля инпут, будет использованна при событии submit формы
	// option: string[] - набор опций для поля
	// getValue(value): () => void - функция, возвращает значение инпута и опции
	// defaultValue: string - значение инпута по дефолту, стартовое
	// max: string - максимальное значение инпута

	const [isFocus, setIsFocus] = useState(false);
	const [values, setValues] = useState({
		value: Number(defaultValue),
		option: options[0],
	});
	const triadNumber = useMemo(() => Number(values.value).toLocaleString(), [values]);
	const optionsRef = useRef();
	useEffect(() => {
		!!getValue && getValue({ ...values, currency: values.currency });
	}, []);

	const toggleOptions = () => {
		optionsRef.current.classList.toggle('select__options_active');
	};

	const handleSelect = (e) => {
		setValues({ ...values, option: e.target.textContent });
		!!getValue && getValue({ ...values, option: e.target.textContent });
		toggleOptions();
	};

	const handleChange = (e) => {
		const inputValue = e.target.value;
		if (inputValue === '' || /^-?\d+(\.\d+)?$/.test(inputValue)) {
			let newValue;
			if (inputValue > Number(max)) {
				newValue = Number(max);
			} else {
				newValue = inputValue === '' ? '' : Number(inputValue);
			}
			setValues({ ...values, value: newValue });
			!!getValue && getValue({ ...values, value: newValue });
		} else {
			setValues({ ...values, value: values.value });
		}
	};

	const handleBlur = (e) => {
		setIsFocus(false);
	};

	const hanleFocus = () => {
		setIsFocus(true);
	};

	return (
		<div className="select">
			<div className="select__text">
				<div className="select__total">
					<span className="select__placeholder">{placeHolder}</span>
					{isFocus ? (
						<input
							className="select__input"
							value={values.value}
							name={name}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={hanleFocus}
							maxLength={10}
						/>
					) : (
						<input
							className="select__input select__fake-input"
							value={triadNumber}
							onFocus={hanleFocus}
							onChange={handleChange}
						/>
					)}
				</div>
				<input
					className="select__input select__input_type_currency"
					value={values.option}
					name={name}
					readOnly
				/>
				<div className="select__options" ref={optionsRef}>
					{options.map((option, index) => (
						<div key={index} className="select__option" onClick={handleSelect}>
							<p>{option}</p>
							{/* <Checkbox /> */}
						</div>
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
