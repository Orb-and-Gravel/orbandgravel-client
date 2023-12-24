import React from 'react';
import { ProductPageImageSlider } from '../components/Products/ProductPageImageSlider';

const images = [
	{
		imgLink:
			'https://images.unsplash.com/photo-1695345272166-4efd76dd7a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
		alt: 'alt',
	},
	{
		imgLink:
			'https://images.unsplash.com/photo-1564512480295-86e479d9b87c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
		alt: 'alt',
	},
	{
		imgLink:
			'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2018&q=80',
		alt: 'alt',
	},
	{
		imgLink:
			'https://images.unsplash.com/photo-1695222508573-5fd70be4c7c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80',
		alt: 'alt',
	},
	{
		imgLink:
			'https://images.unsplash.com/photo-1597740762652-6a8a0e03cee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80',
		alt: 'alt',
	},
	{
		imgLink:
			'https://images.unsplash.com/photo-1613338442882-b4d4643877c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80',
		alt: 'alt',
	},
	{
		imgLink:
			'https://plus.unsplash.com/premium_photo-1669686968068-ef4133a3e782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80',
		alt: 'alt',
	},
	{
		imgLink:
			'https://images.unsplash.com/photo-1695407773557-ea2dc7b3ed4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
		alt: 'alt',
	},
	{
		imgLink:
			'https://plus.unsplash.com/premium_photo-1681319269837-98a23dfb24aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
		alt: 'alt',
	},
	{
		imgLink:
			'https://images.unsplash.com/photo-1695345272166-4efd76dd7a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
		alt: 'alt',
	},
	{
		imgLink:
			'https://images.unsplash.com/photo-1564512480295-86e479d9b87c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
		alt: 'alt',
	},
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
