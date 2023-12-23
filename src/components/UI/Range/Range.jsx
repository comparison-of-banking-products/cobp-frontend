import { useRef, useState } from 'react';

function Range({ placeHolder, name, symbol, min, max, startValue, getValue, step }) {
	// Поле с ползунком

	//placeHolder: string - плейстхолдер поля инпут
	//name: string - имя поля инпут, будет использованна при событии submit формы
	//symbol: string - символ - плейсхолдер, в рамках проекта - символ валюты
	//max: number - максимальное значения поля и ползунка
	//step: number - шаг ползунка
	//startValue: number - начальное значение поля и ползурка при создании компонента
	//getValue(value): () => void - функция, возвращает значение поля и ползунка

	const [value, setValue] = useState({
		[name]: startValue,
	});

	const inputRef = useRef();

	const handleBlur = (e) => {
		if (e.target.value < min) {
			setValue({ ...value, [name]: min });
			!!getValue && getValue({ ...value, [name]: min });
		}
	};

	const handleChange = (e) => {
		const inputValue = e.target.value;
		if (inputValue === '' || /^-?\d+(\.\d+)?$/.test(inputValue)) {
			setValue(inputValue === '' ? '' : { ...value, [name]: Number(inputValue) });
			!!getValue && getValue({ ...value, [name]: Number(inputValue) });
		} else {
		}

		if (e.target.value > max) {
			setValue({ ...value, [name]: max });
			!!getValue && getValue({ ...value, [name]: max });
		}
	};

	return (
		<div className="range">
			<div className="range__text">
				<span className="range__placeholder">{placeHolder}</span>
				<input
					className="range__input"
					value={value[name]}
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
					value={value[name]}
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
