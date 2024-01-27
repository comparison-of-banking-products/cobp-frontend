import React from 'react';

function Promo({ deposits }) {
	const title = deposits ? 'Вклады c высоким процентом' : 'Подбор кредита';
	const subtitle = deposits
		? 'Сервис сравнения банковских депозитов позволяет мгновенно найти лучшие предложения по вкладам'
		: 'Подберём банки, которые готовы выдать вам кредит по выгодной ставке';

	return (
		<section className={`promo promo_${deposits ? 'deposits' : 'credits'}`}>
			<div className={`promo__container`}>
				<h2 className={`promo__title`}>{title}</h2>
				<p className={`promo__subtitle`}>{subtitle}</p>
			</div>
		</section>
	);
}

export default Promo;
