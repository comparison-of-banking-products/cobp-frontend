import { useRef, useState } from 'react';

function Range({ placeHolder, name, symbol, min, max, startValue, getValue, step }) {
	const [value, setValue] = useState({
		[name]: startValue,
	});

	const inputRef = useRef();

	const handleBlur = (e) => {
		if (e.target.value < Number(min)) {
			setValue({ ...value, [name]: Number(min) });
			!!getValue && getValue({ ...value, [name]: Number(min) }, { validate: true });
		}
	};

	const handleChange = (e) => {
		const inputValue = e.target.value;
		if (inputValue === '' || /^-?\d+(\.\d+)?$/.test(inputValue)) {
			if (inputValue < Number(min)) {
				setValue(inputValue === '' ? '' : { ...value, [name]: Number(inputValue) });
				!!getValue && getValue({ ...value, [name]: Number(min) }, { validate: false });
			} else if (e.target.value > Number(max)) {
				setValue({ ...value, [name]: Number(max) });
				!!getValue && getValue({ ...value, [name]: Number(max) }, { validate: true });
			} else {
				setValue(inputValue === '' ? '' : { ...value, [name]: Number(inputValue) });
				!!getValue && getValue({ ...value, [name]: Number(inputValue) }, { validate: true });
			}
		} else {
		}
	};

	return (
		<div className="range">
			<div className="range__text">
				<span className="range__placeholder">{placeHolder}</span>
				<input
					className="range__input"
					value={`${value[name]} мес.`}
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
