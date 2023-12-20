import { Link } from 'react-router-dom';
import { linkNavForFooterData } from '../../utils/constansForFooter';

function Footer() {
	return (
		<footer className="footer">
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
							{linkNavForFooterData
								.slice(linkNavForFooterData[0].id, linkNavForFooterData[4].id)
								.map((link) => (
									<Link className="footer__navigation-link" to="/deposits">
										{link.title}
									</Link>
								))}
						</nav>
						<nav className="footer__navigation">
							{linkNavForFooterData.slice(linkNavForFooterData[4].id).map((link) => (
								<Link className="footer__navigation-link" to="/deposits">
									{link.title}
								</Link>
							))}
						</nav>
					</div>
					<div className="footer__for-user">
						<Link className="footer__for-user-link" to="/">
							Пользователькое соглашение
						</Link>
						<Link className="footer__for-user-link" to="/">
							Политика конфиденциальности
						</Link>
						<p className="footer__for-user-number">+7 (495) 920-70-29</p>
					</div>
					<div className="footer__footnote">
						<p className="footer__footnote-text">
							benchmark не является кредитной организацией. предложения на сайте не являются
							публичной офертой. окончательные условия предоставления банковских продуктов
							определяются договором с выбранным банком
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
