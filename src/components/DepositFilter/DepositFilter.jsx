import React from 'react';
import { useState } from 'react';
import { Range, Button, Select, SelectMultiple } from '../';

function DepositFilter() {
    // const bankList = ['Все банки', 'Альфа-Банк', 'Райффайзен Банк', 'ВТБ', 'Сбербанк', 'Тинькофф Банк'];
    const bankList = ['Альфа-Банк', 'Райффайзен Банк', 'ВТБ', 'Сбербанк', 'Тинькофф Банк'];

    const [currency, setCurrency] = useState(false);
    // const [selectedBanks, setSelectedBanks] = useState(bankList);
    const [selectedBanks, setSelectedBanks] = useState(bankList);
    const [dataReceived, setDataRecieved] = useState(false);

    const [isAllDepo, setIsAllDepo] = useState(true);
    const [isCapitalisation, setIsCapitalisation] = useState(false);
    const [isWithdraw, setIsWithdraw] = useState(false);
    const [isReplenishment, setIsReplenishment] = useState(false);

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

    const handleButtonClick = (buttonType) => {
        if (buttonType === 'allDepo') {
            setIsAllDepo(true);
            setIsCapitalisation(false);
            setIsWithdraw(false);
            setIsReplenishment(false);
        } else if (buttonType === 'capitalisation') {
            setIsAllDepo(false);
            setIsCapitalisation(!isCapitalisation);
        } else if (buttonType === 'withdraw') {
            setIsAllDepo(false);
            setIsWithdraw(!isWithdraw);
        } else if (buttonType === 'replenishment') {
            setIsAllDepo(false);
            setIsReplenishment(!isReplenishment);
        }
        console.log('отфильтровали результаты');
    };

    return (
        <section className='deposit-filter'>
            <form className='deposit-filter__form'>
                <div className='deposit-filter__inputs'>
					<Select
						name="currency"
						placeHolder="Сумма"
						options={['₽', '$', '€', '¥']}
						defaultValue="100000"
						getValue={getCurrencyValue}
						max="10000000"
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
						multiOptions={bankList}
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
                    btnClass={`deposit-filter__checkbox deposit-filter__checkbox${isAllDepo ? '_active' : ''}`}
                    type={'button'}
                    onClick={() => handleButtonClick('allDepo')}
                    // disabled={'false'}
                />
                <Button 
                    textBtn={'С капитализацией'}
                    btnClass={`deposit-filter__checkbox deposit-filter__checkbox${isCapitalisation ? '_active' : ''}`}
                    type={'button'}
                    onClick={() => handleButtonClick('capitalisation')}
                    // disabled={'true'}
                />
                <Button 
                    textBtn={'С частичным снятием'}
                    btnClass={`deposit-filter__checkbox deposit-filter__checkbox${isWithdraw ? '_active' : ''}`}
                    type={'button'}
                    onClick={() => handleButtonClick('withdraw')}
                    // disabled={'true'}
                />
                <Button 
                    textBtn={'С пополнением'}
                    btnClass={`deposit-filter__checkbox deposit-filter__checkbox${isReplenishment ? '_active' : ''}`}
                    type={'button'}
                    onClick={() => handleButtonClick('replenishment')}
                    // disabled={'true'}
                />
            </div>
        </section>
    );
}

export default DepositFilter;
