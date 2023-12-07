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
				modules={[Autoplay, Pagination]}
				className="slider"
			>
				<SwiperSlide>
					<Button
						type="button"
						btnClass="button__primary button__primary_sm"
						textBtn="подобрать кредит"
						onClick={handleClick}
					/>
				</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Slider;
