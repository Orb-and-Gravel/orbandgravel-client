import React, { useState } from 'react';
import { ProductPageImageSlider } from '../components/Products/ProductPageImageSlider';
import images from '../assets/images.json';
import { StarIcon } from '@heroicons/react/24/solid';

export function SingleProductPage() {
	const [color, setColor] = useState('slate');

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
				<div className='flex lg:gap-x-2 gap-x-1 mt-3 items-center md:justify-start justify-center'>
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
				<div className='mt-8'>
					<p>color {color}</p>
					<div className='flex gap-x-4 mt-3'>
						<button
							className={`h-8 w-8 bg-slate-500 rounded-full outline ${
								color == 'slate' ? 'outline-3' : 'outline-1'
							} outline-offset-2 outline-colorFour`}
							onClick={() => {
								setColor('slate');
							}}
						/>
						<button
							className={`h-8 w-8 bg-blue-500 rounded-full outline ${
								color == 'blue' ? 'outline-3' : 'outline-1'
							} outline-offset-2 outline-colorFour`}
							onClick={() => {
								setColor('blue');
							}}
						/>
						<button
							className={`h-8 w-8 bg-green-500 rounded-full outline ${
								color == 'green' ? 'outline-3' : 'outline-1'
							} outline-offset-2 outline-colorFour`}
							onClick={() => {
								setColor('green');
							}}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
