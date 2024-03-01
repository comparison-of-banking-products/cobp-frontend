import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundImg from '../../images/page-404.png';

function PageNotFound() {
	return (
		<section className="page-not-found">
			<img src={PageNotFoundImg} className="page-not-found__img" alt="Страница не найдена - 404" />
			<h2 className="page-not-found__title">Страница не найдена</h2>
			<p className="page-not-found__subtitle">
				Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или
				был введен неверный адресс в адресной строке
			</p>
			<Link to="/" className="page-not-found__btn">
				Перейти на главную
			</Link>
		</section>
	);
}

export default PageNotFound;
