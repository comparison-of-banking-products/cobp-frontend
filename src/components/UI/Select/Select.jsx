import { useEffect, useMemo, useRef, useState } from 'react';
import arrowDown from '../../../vendor/images/icons/chevron-bottom.svg';
import { Checkbox } from '../../';

function Select({ placeHolder, currency, name, getValue, defaultValue, max, min, disableOption }) {
	const [values, setValues] = useState({
		[name]: Number(defaultValue),
		currency: currency[0].split(' ')[1],
		// currency: currency[0],
	});
	// const triadNumber = useMemo(() => Number(values[name]).toLocaleString(), [values]);
	console.log('currency', currency[0].split(' ')[1]);
	const triadNumber = (number) => {
		return number.toLocaleString();
	};

	const renderNumber = (number) => {
		return Number(number.replace(/\s/g, ''));
	};

	const optionsRef = useRef();
	useEffect(() => {
		if (values < Number(min)) {
			!!getValue && getValue({ ...values, currency: values.currency }, { validate: false });
		} else {
			!!getValue && getValue({ ...values, currency: values.currency }, { validate: true });
		}
	}, []);

	useEffect(() => {}, [values]);

	const toggleOptions = () => {
		optionsRef.current.classList.toggle('select__options_active');
	};

	const handleSelect = (e) => {
		setValues({ ...values, currency: e.target.textContent });
		!!getValue && getValue({ ...values, currency: e.target.textContent }, { validate: true });
		toggleOptions();
		console.log('e.t.t', e.target.textContent.split(' ')[1]);
	};

	const handleChange = (e) => {
		const inputValue = renderNumber(e.target.value);
		if (inputValue === '' || /^-?\d+(\.\d+)?$/.test(inputValue)) {
			let newValue;
			let validate;
			if (inputValue > Number(max)) {
				newValue = Number(max);
				validate = true;
			} else if (inputValue < Number(min)) {
				validate = false;
				newValue = inputValue === '' ? '' : Number(inputValue);
			} else {
				newValue = inputValue === '' ? '' : Number(inputValue);
				validate = true;
			}
			setValues({ ...values, [name]: newValue });
			!!getValue && getValue({ ...values, [name]: newValue }, { validate: validate });
		} else {
		}
	};

	const handleBlur = (e) => {
		const inputValue = renderNumber(e.target.value);
		if (inputValue < Number(min)) {
			setValues({ ...values, [name]: Number(min) });
			!!getValue && getValue({ ...values, [name]: Number(min) }, { validate: true });
		}
	};

	return (
		<div className="select">
			<div className="select__text">
				<div className="select__total">
					<span className="select__placeholder">{placeHolder}</span>
					<input
						className="select__input"
						value={triadNumber(values[name])}
						name={name}
						onChange={handleChange}
						onBlur={handleBlur}
						maxLength={10}
					/>
				</div>
				<input
					className="select__input select__input_type_currency"
					value={values.currency.split(' ')[1]}
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
			{!disableOption && (
				<div className="select__arrow">
					<div
						className="select__icon"
						style={{ backgroundImage: `url(${arrowDown})` }}
						onClick={toggleOptions}
					/>
				</div>
			)}
			{disableOption && (
				<style>
					{`	.select::after {
									display: none
								}
							`}
				</style>
			)}
		</div>
	);
}

export default Select;
