import { useEffect, useRef, useState } from 'react';

function Range({ placeHolder, name, symbol, min, max, startValue, getValue }) {
	// Поле с ползунком

	//placeHolder (type: string) - плейстхолдер поля инпут
	//name (type: string) - имя поля инпут, будет использованна при событии submit формы
	//symbol (type: string) - символ - плейсхолдер, в рамках проекта - символ валюты
	//min (type: nubmer) - минимальное значения поля и ползунка
	//max (type: nubmer) - максимальное значения поля и ползунка
	//startValue (type: nubmer) - начальное значение поля и ползурка при создании компонента
	//getValue(value) (type: function) - функция, возвращает значение поля и ползунка

	const numberInTriad = (number) => Number(number).toLocaleString();
	const [value, setValue] = useState(startValue);
	const [triadValue, setTriadValue] = useState(numberInTriad(value));
	const [isFocus, setIsFocus] = useState(false);

	const inputRef = useRef();

	useEffect(() => {
		setTriadValue(numberInTriad(value));
	}, [value]);

	const handleFocus = (e) => {
		setIsFocus(true);
	};

	const handleBlur = (e) => {
		setIsFocus(false);
		if (e.target.value < min) {
			setValue(min);
			!!getValue && getValue(min);
		} else if (e.target.value > max) {
			setValue(max);
			!!getValue && getValue(max);
		}
	};

	const handleChange = (e) => {
		const inputValue = e.target.value;
		if (inputValue === '' || /^-?\d+(\.\d+)?$/.test(inputValue)) {
			setValue(inputValue === '' ? '' : Number(inputValue));
			!!getValue && getValue(e.target.value);
		} else {
			setValue(value);
		}
	};

	return (
		<div className="range">
			<div className="range__text">
				<span className="range__placeholder">{placeHolder}</span>
				{!isFocus ? (
					<input
						className="range__input select__fake-input"
						value={triadValue}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
				) : (
					<input
						className="range__input"
						value={value}
						name={name}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
				)}
				<input
					type="range"
					className="range__range-input"
					ref={inputRef}
					min={min}
					max={max}
					value={value}
					onChange={handleChange}
				></input>
			</div>
			<div className="range__symbol">
				<div className="range__icon" style={{ cursor: 'default' }}>
					{symbol}
				</div>
			</div>
		</div>
	);
}

export default Range;
