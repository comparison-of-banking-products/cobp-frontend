import { useEffect, useRef, useState } from 'react';
import arrowDown from '../../../vendor/images/icons/chevron-bottom.svg';
import { Checkbox } from '../../';

function SelectMultiple({placeHolder, getValue, multiOptions, name, selectedBanks, setSelectedBanks}) {
    const optionsRef = useRef();
    const [allBanksSelected, setAllBanksSelected] = useState(true);

    useEffect(() => {
        console.log(selectedBanks);
    }, [selectedBanks]);

	useEffect(() => {
	    getValue(selectedBanks);
    }, [selectedBanks, getValue]);

    const toggleOptions = () => {
        if (optionsRef.current) {
            optionsRef.current.classList.toggle('select-multiple__options_active');
        }
	};

    const handleCheckboxClick = (optionValue) => {
        let updatedSelectedBanks;

        if (optionValue === 'Все банки') {
            setAllBanksSelected(!allBanksSelected);
            // updatedSelectedBanks = selectedBanks.includes('Все банки') ? [] : [optionValue];
            // updatedSelectedBanks = selectedBanks.includes('Все банки') ? [] : multiOptions;
            updatedSelectedBanks = allBanksSelected ? [] : multiOptions;
        } else {
            updatedSelectedBanks = selectedBanks.includes(optionValue)
                ? selectedBanks.filter((bank) => bank !== optionValue)
                : [...selectedBanks, optionValue];
            
            updatedSelectedBanks = updatedSelectedBanks.filter((bank) => bank !== 'Все банки');
            // setAllBanksSelected(false);
        }

        setSelectedBanks(updatedSelectedBanks);
    }

    const handleOptionClick = (e) => {
        const optionValue = e.target.textContent;
        handleCheckboxClick(optionValue);
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
                    onClick={toggleOptions}
                />
                <div className='select-multiple__options' ref={optionsRef}>
                    <div className="select-multiple__option" onClick={handleOptionClick}>
                        <p>Все банки</p>
                        <Checkbox
                            checkboxClass="checkbox"
                            type="checkbox"
                            checked={selectedBanks.length === multiOptions.length}
                            onChange={() => handleCheckboxClick('Все банки')}
                        />
                    </div>
                    {multiOptions.map((option, index) => (
						<div key={index} className="select-multiple__option" onClick={handleOptionClick}>
                            <p>{option}</p>
                            <Checkbox
                                checkboxClass="checkbox"
                                type="checkbox"
                                checked={selectedBanks.includes(option)}
                                onChange={() => handleCheckboxClick(option)}
                            />
                        </div>
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
