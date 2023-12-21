import { Button, Sort } from '../index';

function DepositsCardList() {
	return (
		<section aria-label="Вклады" className="deposits">
			<div className="deposits__filter">
				<Sort options={['По ставке', 'По сроку', 'По доходу', 'По сумме']} />
			</div>
			<Button type="button" btnClass={'deposits__button-more'} textBtn={'Показать еще'}></Button>
		</section>
	);
}

export default DepositsCardList;
