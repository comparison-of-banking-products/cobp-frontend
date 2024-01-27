import React from 'react';

function Promo({ deposits, title, subtitle }) {
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
