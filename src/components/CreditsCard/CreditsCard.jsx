import { Link } from 'react-router-dom';
import { getLogoName } from '../../utils/api';

function CreditsCard(props) {
	console.log(props);

	const roundNumber = (number) => {
		if (typeof number === 'number') return parseFloat(Math.round(number)).toLocaleString();
	};

	const replacePointNumber = (number) => {
		if (typeof number === 'number') return String(number.toFixed(2)).replace('.', ',');
	};

	return (
		<li className="credits-card">
			<img
				className="credits-card__bank-image"
				src={getLogoName(props.credit.credit.bank.logo)}
				alt={props.credit.credit.bank.name}
			/>
			<div className="credits-card__about-contribution">
				{props.id > 0 &&
				!props.credit.credit.creditOnline &&
				!props.credit.credit.onlineApprove &&
				!props.credit.credit.collateral ? (
					<div className="credits-card__tags-none"></div>
				) : (
					<div className="credits-card__tags">
						{props.id === 0 ? (
							<p className="credits-card__tags-text credits-card__tags-image">Самый выгодный</p>
						) : (
							''
						)}
						{props.credit.credit.creditOnline ? (
							<p className="credits-card__tags-text">С капитализацией</p>
						) : (
							''
						)}
						{props.credit.credit.onlineApprove ? (
							<p className="credits-card__tags-text">С пополнением</p>
						) : (
							''
						)}
						{props.credit.credit.collateral ? (
							<p className="credits-card__tags-text">С частичным снятием</p>
						) : (
							''
						)}
					</div>
				)}
				<div className="credits-card__about-bank">
					<p className="credits-card__about-bank-image" />
					<div className="credits-card__about-bank-text">
						<p className="credits-card__about-bank-name">{props.credit.credit.bank.name}</p>
						<p className="credits-card__about-bank-bid">Максимальный</p>
					</div>
					<ul className="credits-card__about-money">
						<li className="credits-card__about-money-list">
							<p className="credits-card__information">Срок</p>
							<p className="credits-card__term">{props.credit.credit.term} мес</p>
						</li>
						<li className="credits-card__about-money-list">
							<p className="credits-card__information">Ставка</p>
							<p className="credits-card__rate">{replacePointNumber(props.credit.credit.rate)} %</p>
						</li>
						<li className="credits-card__about-money-list">
							<p className="credits-card__information">Переплата</p>
							<p className="credits-card__income">
								{roundNumber(props.credit.maturityInterest)} &#8381;
							</p>
						</li>
						<li className="credits-card__about-money-list">
							<p className="credits-card__information">Сумма</p>
							<p className="credits-card__income">
								{roundNumber(props.credit.totalPayments)} &#8381;
							</p>
						</li>
					</ul>
					<Link className="credits-card__link" to={props.credit.credit.productUrl} />
				</div>
			</div>
		</li>
	);
}

export default CreditsCard;
