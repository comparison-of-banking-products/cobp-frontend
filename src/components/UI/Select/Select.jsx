import { useEffect, useMemo, useRef, useState } from 'react';
import arrowDown from '../../../vendor/images/icons/chevron-bottom.svg';
import { Checkbox } from '../../';

function Select({ placeHolder, currency, name, getValue, defaultValue, max }) {
	// Поле с выбором опций

	// placeHolder: string - плейстхолдер поля инпут
	// name: string - имя поля инпут, будет использованна при событии submit формы
	// option: string[] - набор опций для поля
	// getValue(value): () => void - функция, возвращает значение инпута и опции
	// defaultValue: string - значение инпута по дефолту, стартовое
	// max: string - максимальное значение инпута

	const [isFocus, setIsFocus] = useState(false);
	const [values, setValues] = useState({
		[name]: Number(defaultValue),
		currency: currency[0],
	});
	const triadNumber = useMemo(() => Number(values[name]).toLocaleString(), [values]);
	const optionsRef = useRef();
	useEffect(() => {
		!!getValue && getValue({ ...values, currency: values.currency });
	}, []);

	const toggleOptions = () => {
		optionsRef.current.classList.toggle('select__options_active');
	};

	const handleSelect = (e) => {
		setValues({ ...values, currency: e.target.textContent });
		!!getValue && getValue({ ...values, currency: e.target.textContent });
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
			setValues({ ...values, [name]: newValue });
			!!getValue && getValue({ ...values, [name]: newValue });
		} else {
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
							value={values[name]}
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
					value={values.currency}
					name={name}
					readOnly
				/>
				<div className="select__options" ref={optionsRef}>
					{currency.map((currency, index) => (
						<div key={index} className="select__option" onClick={handleSelect}>
							<p>{currency}</p>
							{currency === values.currency && (
								<Checkbox
									checkboxClass="checkbox"
									type="checkbox"
									checked={true}
									onChange={() => {}}
								/>
							)}
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
