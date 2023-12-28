import { useEffect, useRef, useState } from 'react';
import { Checkbox } from '../..';

function Sort({ options }) {
	const [value, setValue] = useState(options[0]);
	const optionsRef = useRef();
	useEffect(() => {}, []);

	const toggleOptions = () => {
		optionsRef.current.classList.toggle('sort__options_active');
	};

	const handleSelect = (e) => {
		setValue(e.target.textContent);
		toggleOptions();
	};

	return (
		<div className="sort">
			<div className="sort__container" onClick={toggleOptions}>
				<span className="sort__text">{value}</span>
				<div className="sort__img" />
			</div>
			<div className="sort__options" ref={optionsRef}>
				{options.map((option, index) => (
					<div key={index} className="sort__option" onClick={handleSelect}>
						<p>{option}</p>
						{value === option && (
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
	);
}

export default Sort;
