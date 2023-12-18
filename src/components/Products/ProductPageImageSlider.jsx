import React from 'react';
import { CarouselProductPage } from '../Carousel/CarouselProductPage';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function NextArrow(props) {
// 	const { className, style, onClick } = props;
// 	return (
// 		<button className={className} onClick={onClick}>
// 			<ArrowDownRightIcon className='w-6' />
// 		</button>
// 	);
// }

export function ProductPageImageSlider({ slides }) {
	// const settings = {
	// 	dots: false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	nextArrow: <NextArrow />,
	// 	prevArrow: <NextArrow />,
	// };
	return (
		<section className=''>
			<CarouselProductPage />
			{/* <Slider {...settings}>
				{slides.map((slide) => (
					<img src={slide} alt='' />
				))}
			</Slider> */}
		</section>
	);
}
