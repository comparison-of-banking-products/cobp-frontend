import { useEffect, useRef, useState } from 'react';

function Range({ placeHolder, name, symbol, min, max, startValue, getValue, step }) {
	// Поле с ползунком

	//placeHolder: string - плейстхолдер поля инпут
	//name: string - имя поля инпут, будет использованна при событии submit формы
	//symbol: string - символ - плейсхолдер, в рамках проекта - символ валюты
	//max: number - максимальное значения поля и ползунка
	//step: number - шаг ползунка
	//startValue: number - начальное значение поля и ползурка при создании компонента
	//getValue(value): () => void - функция, возвращает значение поля и ползунка

	const [value, setValue] = useState(startValue);

	const inputRef = useRef();

	const handleBlur = (e) => {
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
				<input
					className="range__input"
					value={value}
					name={name}
					onChange={handleChange}
					onBlur={handleBlur}
					maxLength={10}
				/>
				<input
					type="range"
					className="range__range-input"
					ref={inputRef}
					min={min}
					max={max}
					value={value}
					step={step}
					onChange={handleChange}
				/>
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
