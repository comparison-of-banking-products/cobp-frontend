import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogoName } from '../../utils/api';

function DepositsCard(props) {
	const calculator = useSelector((state) => state.calculator);

	const roundNumber = (number) => {
		if (typeof number === 'number') return parseFloat(Math.round(number)).toLocaleString();
	};

	const replacePointNumber = (number) => {
		if (typeof number === 'number') return String(number.toFixed(2)).replace('.', ',');
	};

	return (
		// <li className="deposits-card__list">
		<li className="deposits-card">
			<div className="deposits-card__tags">
				{props.id === 0 ? (
					<p className="deposits-card__tags-text deposits-card__tags-image">Самый выгодный</p>
				) : (
					''
				)}
				{props.deposits.deposit.capitalization ? (
					<p className="deposits-card__tags-text">С капитализацией</p>
				) : (
					''
				)}
				{props.deposits.deposit.replenishment ? (
					<p className="deposits-card__tags-text">С пополнением</p>
				) : (
					''
				)}
				{props.deposits.deposit.partialWithdrawal ? (
					<p className="deposits-card__tags-text">С частичным снятием</p>
				) : (
					''
				)}
			</div>
			<div className="deposits-card__about-contribution">
				<div className="deposits-card__about-bank">
					{/* <p className="deposits-card__about-bank-image" /> */}
					<img
						className="deposits-card__about-bank-image"
						src={getLogoName(props.deposits.deposit.bank.logo)}
						alt={props.deposits.deposit.bank.name}
					/>
					<div className="deposits-card__about-bank-text">
						<p className="deposits-card__about-bank-name">{props.deposits.deposit.bank.name}</p>
						<p className="deposits-card__about-bank-bid">Максимальный</p>
					</div>
				</div>
				<ul className="deposits-card__about-money">
					<li className="deposits-card__about-money-list">
						<p className="deposits-card__information">Срок</p>
						<p className="deposits-card__term">{props.deposits.deposit.term} мес</p>
					</li>
					<li className="deposits-card__about-money-list">
						<p className="deposits-card__information">Ставка</p>
						<p className="deposits-card__rate">
							{replacePointNumber(props.deposits.deposit.rate)} %
						</p>
					</li>
					<li className="deposits-card__about-money-list">
						<p className="deposits-card__information">Доход</p>
						<p className="deposits-card__income">
							{roundNumber(props.deposits.annualInterest)} &#8381;
						</p>
					</li>
					<li className="deposits-card__about-money-list">
						<p className="deposits-card__information">Сумма</p>
						<p className="deposits-card__income">{calculator.depositAmount} &#8381;</p>
					</li>
					{/* <p className="deposits-card__term">
								<p className="deposits-card__information">Срок</p>{props.deposits.deposit.term} мес
							</p>
							<p className="deposits-card__rate">
								<p className="deposits-card__information">Ставка</p>{replacePointNumber(props.deposits.deposit.rate)}
							</p>
							<p className="deposits-card__income">
								<p className="deposits-card__information">Доход</p>{roundNumber(props.deposits.annualInterest)} &#8381;
							</p>
							<p className="deposits-card__sum">
								<p className="deposits-card__information">Сумма</p>{calculator.depositAmount} &#8381;
							</p> */}
				</ul>
				<Link className="deposits-card__link" to={props.deposits.deposit.productUrl} />
			</div>
		</li>
	);
}

export default DepositsCard;

// @nordicesman, @monomono1234
// У меня к вам есть парочка вопросов по поводу
