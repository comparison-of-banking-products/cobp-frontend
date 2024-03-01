import { Link } from 'react-router-dom';
import { getLogoName } from '../../utils/api';

function DepositsCard(props) {
	function handleCardClick() {
		window.open(props.deposit.deposit.productUrl, '_blank');
	}

	console.log(props);

	const roundNumber = (number) => {
		if (typeof number === 'number') return parseFloat(Math.round(number)).toLocaleString();
	};

	const replacePointNumber = (number) => {
		if (typeof number === 'number') return String(number.toFixed(2)).replace('.', ',');
	};

	return (
		<li className="deposits-card" onClick={handleCardClick}>
			{props.id > 0 &&
			!props.deposit.deposit.capitalization &&
			!props.deposit.deposit.replenishment &&
			!props.deposit.deposit.partialWithdrawal ? (
				<div className="deposits-card__tags-none"></div>
			) : (
				<div className="deposits-card__tags">
					{props.id === 0 ? (
						<p className="deposits-card__tags-text deposits-card__tags-image">Самый выгодный</p>
					) : (
						''
					)}
					{props.deposit.deposit.capitalization ? (
						<p className="deposits-card__tags-text">С капитализацией</p>
					) : (
						''
					)}
					{props.deposit.deposit.replenishment ? (
						<p className="deposits-card__tags-text">С пополнением</p>
					) : (
						''
					)}
					{props.deposit.deposit.partialWithdrawal ? (
						<p className="deposits-card__tags-text">С частичным снятием</p>
					) : (
						''
					)}
				</div>
			)}
			<div className="deposits-card__about-bank">
				<div className="deposits-card__image-and-name">
					<img
						className="deposits-card__bank-image"
						src={getLogoName(props.deposit.deposit.bank.logo)}
						alt={props.deposit.deposit.bank.name}
					/>
					<div className="deposits-card__about-bank-text">
						<p className="deposits-card__about-bank-name">{props.deposit.deposit.bank.name}</p>
						<p className="deposits-card__about-bank-bid">{props.deposit.deposit.name}</p>
					</div>
				</div>
				<div className="deposits-card__list-and-link">
					<ul className="deposits-card__about-money">
						<li className="deposits-card__about-money-list">
							<p className="deposits-card__information">Срок</p>
							<p className="deposits-card__term">{props.deposit.deposit.term} мес</p>
						</li>
						<li className="deposits-card__about-money-list">
							<p className="deposits-card__information">Ставка</p>
							<p className="deposits-card__rate">
								{replacePointNumber(props.deposit.deposit.rate)} %
							</p>
						</li>
						<li className="deposits-card__about-money-list">
							<p className="deposits-card__information">Доход</p>
							<p className="deposits-card__income">
								{roundNumber(props.deposit.annualInterest)} &#8381;
							</p>
						</li>
						<li className="deposits-card__about-money-list">
							<p className="deposits-card__information">Сумма</p>
							<p className="deposits-card__income">
								{roundNumber(props.deposit.totalAmount)} &#8381;
							</p>
						</li>
					</ul>
				</div>
				<Link className="deposits-card__link" to={props.deposit.deposit.productUrl} />
			</div>
		</li>
	);
}

export default DepositsCard;

{
	/* <li className="deposits-card">
			<img
				className="deposits-card__bank-image"
				src={getLogoName(props.deposit.deposit.bank.logo)}
				alt={props.deposit.deposit.bank.name}
			/>
			<div className="deposits-card__about-contribution">
				{props.id > 0 &&
				!props.deposit.deposit.capitalization &&
				!props.deposit.deposit.replenishment &&
				!props.deposit.deposit.partialWithdrawal ? (
					<div className="deposits-card__tags-none"></div>
				) : (
					<div className="deposits-card__tags">
						{props.id === 0 ? (
							<p className="deposits-card__tags-text deposits-card__tags-image">Самый выгодный</p>
						) : (
							''
						)}
						{props.deposit.deposit.capitalization ? (
							<p className="deposits-card__tags-text">С капитализацией</p>
						) : (
							''
						)}
						{props.deposit.deposit.replenishment ? (
							<p className="deposits-card__tags-text">С пополнением</p>
						) : (
							''
						)}
						{props.deposit.deposit.partialWithdrawal ? (
							<p className="deposits-card__tags-text">С частичным снятием</p>
						) : (
							''
						)}
					</div>
				)}
				<div className="deposits-card__about-bank">
					<p className="deposits-card__about-bank-image" />
					<div className="deposits-card__about-bank-text">
						<p className="deposits-card__about-bank-name">{props.deposit.deposit.bank.name}</p>
						<p className="deposits-card__about-bank-bid">Максимальный</p>
					</div>
					<ul className="deposits-card__about-money">
						<li className="deposits-card__about-money-list">
							<p className="deposits-card__information">Срок</p>
							<p className="deposits-card__term">{props.deposit.deposit.term} мес</p>
						</li>
						<li className="deposits-card__about-money-list">
							<p className="deposits-card__information">Ставка</p>
							<p className="deposits-card__rate">
								{replacePointNumber(props.deposit.deposit.rate)} %
							</p>
						</li>
						<li className="deposits-card__about-money-list">
							<p className="deposits-card__information">Доход</p>
							<p className="deposits-card__income">
								{roundNumber(props.deposit.annualInterest)} &#8381;
							</p>
						</li>
						<li className="deposits-card__about-money-list">
							<p className="deposits-card__information">Сумма</p>
							<p className="deposits-card__income">
								{roundNumber(props.deposit.totalAmount)} &#8381;
							</p>
						</li>
					</ul>
					<Link className="deposits-card__link" to={props.deposit.deposit.productUrl} />
				</div>
			</div>
		</li> */
}
