import React, { useEffect, useState } from 'react';
import { SupportCard } from '../index';

function Support() {
	const [visibleCards, setVisibleCards] = useState(0);

	useEffect(() => {
		const updateVisibleCards = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth <= 576) {
				setVisibleCards(1);
			} else if (screenWidth <= 870) {
				setVisibleCards(2);
			} else {
				setVisibleCards(3);
			}
		};

		updateVisibleCards();
		window.addEventListener('resize', updateVisibleCards);

		return () => {
			window.removeEventListener('resize', updateVisibleCards);
		};
	}, []);

	return (
		<section className="support">
			<div className="support__banner">
				<h1 className="support__title">Остались вопросы?</h1>
				<p className="support__instruction">
					Задай вопрос эксперту по продуктам и услугам компаний
				</p>
			</div>

			<ul className="support__lists">
				{Array.from({ length: visibleCards }, (v, i) => (
					<SupportCard key={i} />
				))}
			</ul>
		</section>
	);
}

export default Support;
