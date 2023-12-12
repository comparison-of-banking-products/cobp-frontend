import { Link } from 'react-router-dom';

function Footer() {
	return (
		<section className="footer">
			<div className="footer__container">
				<div className="footer__specification">
					<Link className="footer__logo" to="/" />
					<h4 className="footer__description">
						benchmark — это платформа для сравнения банковских продуктов
					</h4>
					<p className="footer__copyright">&copy;2023 benchmark</p>
				</div>
				<div className="footer__information">
					<div className="footer__column">
						<nav className="footer__navigation">
							<Link className="footer__navigation-link" to="/deposits">
								вклады
							</Link>
							<Link className="footer__navigation-link" to="/credits">
								кредиты
							</Link>
							<Link className="footer__navigation-link" to="/debitcard">
								дебетовые карты
							</Link>
							<Link className="footer__navigation-link" to="/creditcard">
								кредитные карты
							</Link>
						</nav>
						<nav className="footer__navigation">
							<Link className="footer__navigation-link" to="/">
								о компании
							</Link>
							<Link className="footer__navigation-link" to="/">
								новости
							</Link>
							<Link className="footer__navigation-link" to="/">
								контакты
							</Link>
						</nav>
					</div>
					<div className="footer__for-user">
						<Link className="footer__for-user-link" to="/">
							пользователькое соглашение
						</Link>
						<Link className="footer__for-user-link" to="/">
							политика конфиденциальности
						</Link>
						<p className="footer__for-user-number">+7 (495) 920-70-29</p>
					</div>
					<div className="footer__footnote">
						<p className="footer__footnote-text">
							«benchmark» не является кредитной организацией. предложения на сайте не являются
							публичной офертой. окончательные условия предоставления банковских продуктов
							определяются выбранным банком кредитом
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;
