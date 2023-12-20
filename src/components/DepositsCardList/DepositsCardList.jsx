import { Button } from '../index';

function DepositsCardList() {
	return (
		<section aria-label="Вклады" className="deposits">
			<div className="deposits__filter">
				{/* это селектр */}
				<p>по ставке</p>
				<button className="deposits__button">
					{/* <img className="deposits__img" src={depositsImg} alt="-" /> */}
				</button>
			</div>

			{/* карточки вкладов */}

			<Button
				type="button"
				btnClass={'deposits__button-more'}
				textBtn={'Показать еще'}
				// onClick={onClick} disabled={disabled}
			></Button>
		</section>
	);
}

export default DepositsCardList;
