import { Button, Sort } from '../index';
import DepositsCard from '../DepositsCard/DepositsCard';
import { useSelector } from 'react-redux';
import { initialVisibleCount } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';
import ErrorCard from '../UI/ErrorCard/ErrorCard';
import noProducts from '../../images/noproducts-png.png';
import pushButton from '../../images/pushbutton-png.png';

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
			<ul className="deposits-card-list__card-container">
				{isSubmitted ? (
					deposits && deposits?.length > 0 ? (
						deposits
							.slice(0, visibleCards)
							.map((deposit, index) => <DepositsCard key={index} id={index} deposit={deposit} />)
					) : (
						<ErrorCard
							title={'Таких депозитов нет'}
							text={'Попробуйте изменить срок или сумму'}
							img={noProducts}
						/>
					)
				) : (
					<ErrorCard
						title={'Нажмите кнопку «Показать»'}
						text={'Чтобы подобрать вклады'}
						img={pushButton}
					/>
				)}
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
