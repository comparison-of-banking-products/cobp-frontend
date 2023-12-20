import { useEffect, useRef, useState } from 'react';
import arrowDown from '../../../vendor/images/icons/chevron-bottom.svg';

function SelectMultiple({placeHolder, getValue, options, name, selectedBanks, setSelectedBanks}) {

    const optionsRef = useRef();

	useEffect(() => {
	    getValue(selectedBanks);
    }, [selectedBanks, getValue]);

    const toggleOptions = () => {
		if (optionsRef.current) {
            optionsRef.current.classList.toggle('select-multiple__options_active');
        }
	};

    const handleChange = (e) => {
        const optionValue = e.target.textContent;
        if (optionValue === 'Все банки') {
            setSelectedBanks(options);
        } else {
            const updatedSelectedBanks = selectedBanks.includes(optionValue)
            ? selectedBanks.filter((bank) => bank !== optionValue)
            : [...selectedBanks, optionValue];

            setSelectedBanks(updatedSelectedBanks);
        }
    };

    return (
        <div className='select-multiple'>
            <div className='select-multiple__text'>
                <span className='select-multiple__placeholder'>{placeHolder}</span>
                <input 
                    className='select-multiple__input' 
                    value={selectedBanks.join(', ')}
                    name={name}
                    readOnly
                />
                <div className='select-multiple__options' ref={optionsRef}>
                    {options.map((option, index) => (
						<p key={index} className="select-multiple__option" onClick={handleChange}>
							{option}
						</p>
					))}
                </div>
            </div>
            <div>
                <div className="select-multiple__icon"
					style={{ backgroundImage: `url(${arrowDown})` }}
					onClick={toggleOptions}
                >    
                </div>

            </div>            
        </div>
    );
}

export default SelectMultiple;
