import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderContent from './SliderContent/SliderContent';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/navigation';
import '../../scss/components/slider.scss';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Slider() {
	return (
		<section className="slider">
			<Swiper
				spaceBetween={30}
				centeredSlides
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				pagination={{
					clickable: true,
				}}
				loop
				navigation
				modules={[Autoplay, Navigation, Pagination]}
				className="slider__swiper"
			>
				<SwiperSlide className="slider__container slider__credits">
					<SliderContent
						sliderTitle="Выгодные кредиты для вашего бизнеса"
						sliderSubtitle="benchmark помогает в&nbsp;получении выгодных банковских кредитов для вашего бизнеса"
						linkPage="/credits"
						textLink="Подобрать кредит"
					/>
				</SwiperSlide>
				<SwiperSlide className="slider__container slider__deposits">
					<SliderContent
						sliderTitle="Вклады с&nbsp;доходом до&nbsp;15,5% годовых"
						sliderSubtitle="Каждый месяц получайте проценты на&nbsp;карту или вклад"
						linkPage="/deposits"
						textLink="Подобрать вклад"
					/>
				</SwiperSlide>
				<SwiperSlide className="slider__container slider__credit-card">
					<SliderContent
						sliderTitle="Кредитные карты"
						sliderSubtitle="Расплачивайтесь кредиткой и&nbsp;получайте кэшбэк бонусами за&nbsp;любые покупки"
						linkPage="/creditcard"
						textLink="Подобрать карту"
						// TODO: удалить inactive когда будет данная страница
						inactive
					/>
				</SwiperSlide>
				<SwiperSlide className="slider__container slider__debit-card">
					<SliderContent
						sliderTitle="Дебетовые карты"
						sliderSubtitle="лучший способ оплачивать покупки и&nbsp;получать кэшбэк"
						linkPage="/debitcard"
						textLink="Подобрать карту"
						// TODO: удалить inactive когда будет данная страница
						inactive
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Slider;
