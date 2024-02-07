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
		const inputValue = parseFloat(e.target.value);
		if (!isNaN(inputValue)) {
			if (inputValue < min) {
				setValue({ ...value, [name]: min });
				!!getValue && getValue({ ...value, [name]: min }, { validate: false });
			} else if (inputValue > max) {
				setValue({ ...value, [name]: max });
				!!getValue && getValue({ ...value, [name]: max }, { validate: true });
			} else {
				setValue({ ...value, [name]: inputValue });
				!!getValue && getValue({ ...value, [name]: inputValue }, { validate: true });
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
