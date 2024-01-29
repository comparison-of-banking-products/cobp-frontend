import { Button, Sort } from '../index';
import DepositsCard from '../DepositsCard/DepositsCard';
import { useSelector } from 'react-redux';
import { initialVisibleCount } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function DepositsCardList({ isSubmitted, visibleCards, setVisibleCards }) {
	const deposits = useSelector((state) => state.deposits.deposits);
	const totalElements = useSelector((state) => state.deposits.totalElements);
	const isLoading = useSelector((state) => state.deposits.isLoading);

	if (isLoading) {
		return <Preloader />;
	}

	// console.log('deposits', deposits.totalElements);
	// console.log('isSubmitted', isSubmitted);

	const handleLoadMore = () => {
		setVisibleCards((prev) => prev + initialVisibleCount);
	};

	return (
		<section aria-label="Вклады" className="deposits-card-list">
			{/* <div className="deposits__filter">
				<Sort options={['По ставке', 'По сроку', 'По доходу', 'По сумме']} />
			</div> */}
			<ul className="deposits-card-list__card-container">
				{isSubmitted
					? deposits && deposits?.length > 0
						? deposits
								.slice(0, visibleCards)
								.map((deposit, index) => <DepositsCard key={index} id={index} deposit={deposit} />)
						: 'У нас нет депозитов с такими параметрами'
					: 'Нажмите "Показать", чтобы тут что-то появилось'}
			</ul>

			{isSubmitted && visibleCards < totalElements && (
				<Button
					type="button"
					btnClass="deposits-card-list__button-more"
					textBtn="Показать еще"
					onClick={handleLoadMore}
				></Button>
			)}
		</section>
	);
}

export default DepositsCardList;
