import React from 'react';
import { ProductPageImageSlider } from '../components/Products/ProductPageImageSlider';
import images from '../assets/images.json';
import { StarIcon } from '@heroicons/react/24/solid';

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
				<div className='flex gap-x-2 mt-3 items-center'>
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
