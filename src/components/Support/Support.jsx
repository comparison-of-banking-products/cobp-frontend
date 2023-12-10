import React from 'react';
import SupportCard from '../SupportCard/SupportCard';

function Support() {
	return (
		<section className="support">
			<div className="support__banner">
				<h1 className="support__title">остались вопросы?</h1>
				<p className="support__instruction">
					задай вопрос эксперту по продуктам и услугам компаний
				</p>
			</div>

			<ul className="support__lists">
				<li className="support__item">
					<SupportCard />
				</li>
				<li className="support__item">
					<SupportCard />
				</li>
				<li className="support__item">
					<SupportCard />
				</li>
			</ul>
		</section>
	);
}

export default Support;
