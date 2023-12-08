import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import '../../scss/components/slider.scss';
import { Button } from '../index';
import { Autoplay, Pagination } from 'swiper/modules';

function Slider() {
	const handleClick = () => {
		console.log('asfasfasf');
	};

	return (
		<section className="slider">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination]}
				className="slider__swiper"
			>
				<SwiperSlide className="slider__container slider__credits">
					<div className="slider__content">
						<h2 className="slider__title">выгодные кредиты для вашего бизнеса</h2>
						<p className="slider__subtitle">
							benchmark помогает в&nbsp;получении выгодных банковских кредитов для вашего бизнеса
						</p>
						<Button
							type="button"
							btnClass="slider__button button__primary button__primary_sm"
							textBtn="подобрать кредит"
							onClick={handleClick}
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider__container slider__deposits">
					<div className="slider__content">
						<h2 className="slider__title">вклады с&nbsp;доходом до&nbsp;15,5% годовых</h2>
						<p className="slider__subtitle">
							каждый месяц получайте проценты на&nbsp;карту или вклад
						</p>
						<Button
							type="button"
							btnClass="slider__button button__primary button__primary_sm"
							textBtn="подобрать вклад"
							onClick={handleClick}
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider__container slider__credit-card">
					<div className="slider__content">
						<h2 className="slider__title">кредитные карты</h2>
						<p className="slider__subtitle">
							расплачивайтесь кредиткой и&nbsp;получайте кэшбэк бонусами за&nbsp;любые покупки
						</p>
						<Button
							type="button"
							btnClass="slider__button button__primary"
							textBtn="подобрать карту"
							onClick={handleClick}
							disabled
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slider__container slider__debit-card">
					<div className="slider__content">
						<h2 className="slider__title">кредитные карты</h2>
						<p className="slider__subtitle">
							лучший способ оплачивать покупки и&nbsp;получать кэшбэк
						</p>
						<Button
							type="button"
							btnClass="slider__button button__primary button__primary_sm"
							textBtn="подобрать карту"
							onClick={handleClick}
							disabled
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Slider;
