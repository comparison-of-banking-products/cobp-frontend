import { Link } from 'react-router-dom';
import { linksData } from '../../utils/linksData';

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
							{linksData.slice(linksData[0].id, linksData[4].id).map((link) => (
								<Link className="footer__navigation-link" to={link.page} key={link.id}>
									{link.title}
								</Link>
							))}
						</nav>
						<nav className="footer__navigation">
							{linksData.slice(linksData[4].id).map((link) => (
								<Link className="footer__navigation-link" to={link.page} key={link.id}>
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
							benchmark не является кредитной организацией. Предложения на сайте не являются
							публичной офертой. Окончательные условия предоставления банковских продуктов
							определяются договором с выбранным банком
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
