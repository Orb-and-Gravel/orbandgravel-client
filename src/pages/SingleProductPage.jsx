import React from 'react';
import { ProductPageImageSlider } from '../components/Products/ProductPageImageSlider';

const images = [
	'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export function SingleProductPage() {
	return (
		<div className='grid grid-cols-7 gap-x-4'>
			<section className='col-span-4'>
				<ProductPageImageSlider slides={images} />
			</section>
			<section className='col-span-3 bg-red-800'>asfs</section>
		</div>
	);
}
