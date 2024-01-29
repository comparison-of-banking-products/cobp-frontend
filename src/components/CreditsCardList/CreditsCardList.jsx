import { Button, Sort } from '../index';
import DepositsCard from '../DepositsCard/DepositsCard';
import { useDispatch, useSelector } from 'react-redux';

function CreditsCardList({ isSubmitted }) {
	// const credits = useSelector((state) => state.credits.credits);
	// // console.log('deposits', deposits.totalElements);
	// // console.log('isSubmitted', isSubmitted);
	// return (
	// 	<section aria-label="Вклады" className="credits-card-list">
	// 		<ul className="credits-card-list__card-container">
	// 			{isSubmitted
	// 				? credits && credits.calculatedDeposits?.length > 0
	// 					? credits.calculatedDeposits.map((credits, index) => (
	// 						<CreditsCard key={index} id={index} credits={credits} />
	// 					))
	// 					: 'У нас нет депозитов с такими параметрами'
	// 				: 'Нажмите "Показать", чтобы тут что-то появилось'}
	// 		</ul>
	// 		<Button type="button" btnClass={'credits-card-list__button-more'} textBtn={'Показать еще'}></Button>
	// 	</section>
	// );
}

export default CreditsCardList;
