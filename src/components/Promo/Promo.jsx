import React from 'react';

function Promo({ deposits, title, subtitle }) {
	return (
		<section className={`promo-${deposits ? 'deposits' : 'credits'}`}>
			<div className={`promo-${deposits ? 'deposits' : 'credits'}__container`}>
				<h2 className={`promo-${deposits ? 'deposits' : 'credits'}__title`}>{title}</h2>
				<p className={`promo-${deposits ? 'deposits' : 'credits'}__subtitle`}>{subtitle}</p>
			</div>
		</section>
	);
}

export default Promo;
