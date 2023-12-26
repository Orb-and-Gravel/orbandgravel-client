import React from 'react';
import { ProductPageImageSlider } from '../components/Products/ProductPageImageSlider';
import images from '../assets/images.json';

export function SingleProductPage() {
	return (
		<div className='grid grid-cols-7'>
			<section className='col-span-4'>
				<ProductPageImageSlider slides={images} />
			</section>
			<section className='col-span-3 p-14'>
				<h4 className='text-2xl font-bold text-colorFive'>
					Hoops & Pearl Charms set
				</h4>
				<h6 className='font-semibold text-xl text-colorThree mt-0.5'>
					PKR 3000
				</h6>
				<hr className='mt-9 border border-colorFour' />
				<div></div>
			</section>
		</div>
	);
}
