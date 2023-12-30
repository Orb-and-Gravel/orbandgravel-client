import React from 'react';
import { ProductPageImageSlider } from '../components/Products/ProductPageImageSlider';
import images from '../assets/images.json';
import { StarIcon } from '@heroicons/react/24/solid';

export function SingleProductPage() {
	return (
		<div className='md:grid block grid-cols-7'>
			<section className='col-span-4'>
				<ProductPageImageSlider slides={images} />
			</section>
			<section className='col-span-3 lg:p-14 p-8 md:text-left text-center'>
				<h4 className='lg:text-2xl text-xl font-bold text-colorFive'>
					Hoops & Pearl Charms set
				</h4>
				<h6 className='font-semibold lg:text-xl text-lg text-colorThree mt-0.5'>
					PKR 3000
				</h6>
				<div className='flex lg:gap-x-2 gap-x-1 mt-3 items-center sm:justify-start justify-center'>
					<StarIcon className='w-4' />
					<StarIcon className='w-4' />
					<StarIcon className='w-4' />
					<StarIcon className='w-4' />
					<StarIcon className='w-4' />
					<p className='text-sm mx-1 leading-[0px]'>4.5</p>
					<p>|</p>
					<a className='text-sm underline ml-1' href='#'>
						See 5 reviews
					</a>
				</div>
				<hr className='mt-7 border border-colorFour' />
				<div></div>
			</section>
		</div>
	);
}
