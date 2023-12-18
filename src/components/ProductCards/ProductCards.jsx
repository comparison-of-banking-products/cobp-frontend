import React from 'react';
import ProdCard from '../ProdCard/ProdCard';

function ProductCards() {
	return (
		<section className="product-cards">
			<h2 className="product-cards__title">наши продукты</h2>
			<div className="product-cards__container">
				<ProdCard 
					className={'prod-card__wide'}
					title={'Кредиты'}
					text={'Удобный расчет на калькуляторе и оформление онлайн'}
				/>

				<ProdCard 
					className={'prod-card__slim'}
					title={'Кредитные карты'}
					text={'Подходит для повседневных трат и покупок в рассрочку'}
				/>

				<ProdCard 
					className={'prod-card__slim'}
					title={'Дебетовые карты'}
					text={'Кэшбэк рублями до 30%, переводы без комиссии'}
				/>

				<ProdCard 
					className={'prod-card__wide'}
					title={'Вклады'}
					text={'Откройте вклад с пополнением, каждый месяц получайте проценты на карту или вклад'}
				/>
			</div>
		</section>
	);
}

export default ProductCards;
