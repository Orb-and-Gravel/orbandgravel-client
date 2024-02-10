import React, { useEffect, useRef, useState } from 'react';
import { ProductPageImageSlider } from '../components/Products/ProductPageImageSlider';
import images from '../assets/images.json';
import { StarIcon } from '@heroicons/react/24/solid';
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ProductPageAccordion } from '../components/Products/ProductPageAccordion';
import { ProductItem } from '../components/Products/ProductItem';
import { RatingsFilter } from '../components/Products/RatingsFilter';

export function SingleProductPage() {
	const [color, setColor] = useState('slate');
	return (
		<div>
			<div className='md:grid block grid-cols-7'>
				<section className='col-span-4'>
					<ProductPageImageSlider slides={images} />
				</section>
				<section className='col-span-3 lg:p-14 p-8 md:text-left text-center'>
					<h4 className='lg:text-2xl text-xl font-bold text-colorFive'>
						Hoops & Pearl Charms set
					</h4>
					<h6 className='font-semibold lg:text-xl text-lg text-colorThree mt-2'>
						PKR 3000
					</h6>
					<div className='flex lg:gap-x-2 gap-x-1 mt-5 items-center md:justify-start justify-center'>
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
					<hr className='mt-10 border border-colorFour' />
					<div className='mt-12'>
						<p>color {color}</p>
						<div className='flex gap-x-4 mt-3 justify-center sm:justify-start'>
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
					<div className='mt-16'>
						<div className='flex gap-x-1'>
							<button className='text-colorOne bg-colorFive p-4 flex-1 font-semibold tracking-wider hover:bg-colorFour transition-all'>
								ADD TO CART
							</button>
							<button className='text-colorOne bg-colorFive py-4 px-6 hover:bg-colorFour transition-all'>
								<HeartIcon className='w-6' />
							</button>
						</div>
					</div>
					<section className='mt-20'>
						<hr className='border border-colorFour' />
						<ProductPageAccordion
							accordionDetails='
						<p>s</p>
						<p>s</p>
						<p>s</p>
						<p>s</p>
						<p>s</p>
						<p>s</p>
						<p>s</p>
						<p>s</p>'
							accordionName='Details'
						/>
						<hr className='border border-colorFour mt-6' />
						<ProductPageAccordion
							accordionDetails='
						<p>p</p>
						<p>p</p>
						<p>p</p>
						<p>p</p>
						<p>l</p>
						<p>v</p>
						<p>cv</p>
						<p>df</p>'
							accordionName='Description'
						/>
						<hr className='border border-colorFour mt-6' />
					</section>
					<section className='mt-20'>
						<h3 className='font-oswald text-4xl font-semibold tracking-tight text-colorFive mb-2'>
							YOU MIGHT ALSO LIKE
						</h3>
						<div className='grid grid-cols-3 gap-x-2 md:grid-cols-2 xl:grid-cols-3'>
							<ProductItem
								imgUrl='https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
								name='Necklace Silver'
								price='PKR 2300'
								alt='alt img'
								height={200}
							/>
							<ProductItem
								imgUrl='https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
								name='Necklace Silver'
								price='PKR 2300'
								alt='alt img'
								height={200}
							/>
							<div className='md:hidden xl:block'>
								<ProductItem
									imgUrl='https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
									name='Necklace Silver'
									price='PKR 2300'
									alt='alt img'
									height={200}
								/>
							</div>
						</div>
					</section>
				</section>
			</div>
			<section className='sm:px-16 px-8 mt-16 w-full'>
				<h2 className='font-oswald text-5xl font-semibold text-colorFive tracking-tight'>
					REVIEWS
				</h2>
				<div className='bg-colorOne sm:mt-10 mt-5 py-7 sm:px-7 px-3 xl:grid xl:grid-cols-3 xl:items-center text-center sm:text-left'>
					<div className='font-colorFive font-roboto'>
						<span className='text-9xl font-bold'>4.5</span>
						<span className='text-4xl'>/</span>
						<span className='text-lg font-bold'>5</span>
						<br className='xl:hidden' />
						<span className='xl:ml-10 ml-2 font-nunito'>(30 reviews)</span>
					</div>
					<div className='h-full border-l-2 border-colorFive mx-auto hidden xl:block'></div>
					<div className='xl:justify-self-center mt-3 xl:mt-0 w-fit mx-auto sm:mx-0'>
						<RatingsFilter />
					</div>
				</div>
			</section>
		</div>
	);
}
