import { Button, Sort } from '../index';
import DepositsCard from '../DepositsCard/DepositsCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function DepositsCardList({ isSubmitted }) {
	const deposits = useSelector((state) => state.deposits.deposits);

	// console.log('deposits', deposits.totalElements);
	// console.log('isSubmitted', isSubmitted);

	return (
		<section aria-label="Вклады" className="deposits">
			<div className="deposits__filter">
				<Sort options={['По ставке', 'По сроку', 'По доходу', 'По сумме']} />
			</div>
			<ul className="deposits__card-container">
				{isSubmitted
					? deposits && deposits.calculatedDeposits?.length > 0
						? deposits.calculatedDeposits.map((deposit, index) => (
								<DepositsCard key={index} id={index} deposits={deposit} />
						  ))
						: 'У нас нет депозитов с такими параметрами'
					: 'Нажмите "Показать", чтобы тут что-то появилось'}
			</ul>
			<Button type="button" btnClass={'deposits__button-more'} textBtn={'Показать еще'}></Button>
		</section>
	);
}

export default DepositsCardList;
