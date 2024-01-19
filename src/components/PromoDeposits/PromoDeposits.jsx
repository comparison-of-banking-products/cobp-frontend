import React from 'react';

function PromoDeposits() {
	const getSubtitleText = () => {
		const screenWidth = window.innerWidth;
		if (screenWidth < 705) {
			return 'Сервис сравнения банковских депозитов позволяет мгновенно найти лучшие предложения по вкладам';
		} else {
			return 'Сервис сравнения банковских депозитов позволяет мгновенно найти лучшие предложения по вкладам с выгодными условиями и высокой процентной ставкой';
		}
	};

	return (
		<section className="promo-deposits">
			<div className="promo-deposits__container">
				<h2 className="promo-deposits__title">Вклады c&nbsp;высоким процентом</h2>
				<p className="promo-deposits__subtitle">{getSubtitleText()}</p>
			</div>
		</section>
	);
}

export default PromoDeposits;
