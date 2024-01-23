import React from 'react';
import { SupportCard } from '../index';

function Support() {
	return (
		<section className="support">
			<div className="support__banner">
				<h1 className="support__title">Остались вопросы?</h1>
				<p className="support__instruction">
					Задай вопрос эксперту по продуктам и услугам компаний
				</p>
			</div>

			<ul className="support__lists">
				<SupportCard />
				<SupportCard />
				<SupportCard />
			</ul>
		</section>
	);
}

export default Support;
