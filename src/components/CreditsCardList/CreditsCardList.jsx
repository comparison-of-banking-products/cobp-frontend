import { Button, Sort } from '../index';
import CreditsCard from '../CreditsCard/CreditsCard';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { initialVisibleCount } from '../../utils/constants';

function CreditsCardList({ isSubmitted, visibleCards, setVisibleCards }) {
	const credits = useSelector((state) => state.credits.credits);
	const totalElements = useSelector((state) => state.credits.totalElements);
	const isLoading = useSelector((state) => state.credits.isLoading);

	if (isLoading) {
		return <Preloader />;
	}

	// console.log('deposits', deposits.totalElements);
	// console.log('isSubmitted', isSubmitted);

	const handleLoadMore = () => {
		setVisibleCards((prev) => prev + initialVisibleCount);
	};

	return (
		<section aria-label="Вклады" className="credits-card-list">
			<ul className="credits-card-list__card-container">
				{isSubmitted
					? credits && credits?.length > 0
						? credits
								.slice(0, visibleCards)
								.map((credit, index) => <CreditsCard key={index} id={index} credit={credit} />)
						: 'У нас нет кредитов с такими параметрами'
					: 'Нажмите "Показать", чтобы тут что-то появилось'}
			</ul>

			{isSubmitted && visibleCards < totalElements && (
				<Button
					type="button"
					btnClass="credits-card-list__button-more"
					textBtn="Показать еще"
					onClick={handleLoadMore}
				></Button>
			)}
		</section>
	);

	// // const credits = useSelector((state) => state.credits.credits);
	// // // console.log('deposits', deposits.totalElements);
	// // // console.log('isSubmitted', isSubmitted);
	// return (
	// 	<section aria-label="Вклады" className="credits-card-list">
	// 		<ul className="credits-card-list__card-container">
	// 			{isSubmitted
	// 				? credits && credits.calculatedDeposits?.length > 0
	// 					? credits.calculatedDeposits.map((credits, index) => (
	// 						<CreditsCard key={index} id={index} credits={credits} />
	// 					))
	// 					: 'У нас нет кредитов с такими параметрами'
	// 				: 'Нажмите "Показать", чтобы тут что-то появилось'}
	// 		</ul>
	// 		<Button type="button" btnClass={'credits-card-list__button-more'} textBtn={'Показать еще'}></Button>
	// 	</section>
	// );
}

export default CreditsCardList;
