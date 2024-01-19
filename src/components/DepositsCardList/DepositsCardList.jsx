import { Button, Sort } from '../index';
import DepositsCard from '../DepositsCard/DepositsCard';
import { useDispatch, useSelector } from 'react-redux';

function DepositsCardList() {
	const deposits = useSelector((state) => state.deposits.deposits);

	return (
		<section aria-label="Вклады" className="deposits">
			<div className="deposits__filter">
				<Sort options={['По ставке', 'По сроку', 'По доходу', 'По сумме']} />
			</div>
			{/* <ul className="deposits__card-container">
				{deposits.map((deposits, index) => (
					<DepositsCard key={index} id={index} deposits={deposits} />
				))}
			</ul> */}
			<Button type="button" btnClass={'deposits__button-more'} textBtn={'Показать еще'}></Button>
		</section>
	);
}

export default DepositsCardList;
