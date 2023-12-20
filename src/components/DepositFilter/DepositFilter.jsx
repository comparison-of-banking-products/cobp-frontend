import React from 'react';
import { useState } from 'react';
import { Range, Button, Select, SelectMultiple } from '../';

function DepositFilter() {
    const bankList = ['Все банки', 'Альфа-Банк', 'Райффайзен Банк', 'ВТБ'];

    const [currency, setCurrency] = useState(false);
    const [selectedBanks, setSelectedBanks] = useState([bankList[0]]);

    const [dataReceived, setDataRecieved] = useState(false);
    const [capitalisation, setCapitalisation] = useState(false);
    const [partilaWithdraw, setPartilaWithdraw] = useState(false);
    const [replenishment, setReplenishment] = useState(false);

    const getCurrencyValue = (value) => {
		setCurrency(value);
	};

    const getSelectedBanksValue = (value) => {
		setSelectedBanks(value);
	};

    const handleSubmit = () => {
        console.log('постучались в API')

        // const requestData = {
        //     currency,
        //     selectedBanks,
        // };
    };

    const handleClick = () => {
        console.log('отфильтровали результаты')
    };


    return (
        <section className='deposit-filter'>
            <form className='deposit-filter__form'>
                <div className='deposit-filter__inputs'>
                    {/* в .range нужно попроваить padding на 14px */}
                    <Range
						name="summ"
						placeHolder="Cумма"
						symbol={currency}
						min={10000}
						max={1000000}
						startValue={100000}
					/>
					<Select
						getValue={getCurrencyValue}
						name="currency"
						placeHolder="Валюта"
						options={['₽', '$']}
					/>
                    <Range
						name="term"
						placeHolder="Срок"
						min={1}
						max={12}
						startValue={5}
					/>
                    <SelectMultiple
						getValue={getSelectedBanksValue}
						name="banks"
						placeHolder="Банки"
						options={bankList}
                        selectedBanks={selectedBanks}
                        setSelectedBanks={setSelectedBanks}
					/>
                </div>
                <Button 
                    textBtn={'Показать'}
                    btnClass={'deposit-filter__submit'}
                    type={'submit'}
                    onClick={handleSubmit}
                    disabled={'false'}
                />
                
            </form>
            <div className='deposit-filter__checkboxes'>
                <Button 
                    textBtn={'Все вклады'}
                    btnClass={'deposit-filter__checkbox'}
                    type={'button'}
                    onClick={handleClick}
                    disabled={'false'}
                />
                <Button 
                    textBtn={'С капитализацией'}
                    btnClass={'deposit-filter__checkbox'}
                    type={'button'}
                    onClick={handleClick}
                    disabled={'true'}
                />
                <Button 
                    textBtn={'С частичным снятием'}
                    btnClass={'deposit-filter__checkbox'}
                    type={'button'}
                    onClick={handleClick}
                    disabled={'true'}
                />
                <Button 
                    textBtn={'С пополнением'}
                    btnClass={'deposit-filter__checkbox'}
                    type={'button'}
                    onClick={handleClick}
                    disabled={'true'}
                />
            </div>
        </section>
    );
}

export default DepositFilter;
