import React, { useEffect, useState } from 'react';
import { ProductPageImageSlider } from '../components/Products/ProductPageImageSlider';
import images from '../assets/images.json';
import { StarIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import { ProductPageAccordion } from '../components/Products/ProductPageAccordion';
import { ProductItem } from '../components/Products/ProductItem';
import { RatingsFilter } from '../components/Products/RatingsFilter';
import { Review } from '../components/Review/Review';
import { useParams } from 'react-router-dom';
import { useGetSingleProduct } from '../query/hooks/useProduct';
import { Loader } from '../components/Loader/Loader';

export function SingleProductPage() {
	const { slug } = useParams();
	const { data, isLoading, isError } = useGetSingleProduct(slug);
	const [color, setColor] = useState(null);
	const [colorImages, setColorImages] = useState([]);

	useEffect(() => {
		if (data) {
			setColor(data?.data.message.productSet.itemSet[0].color);
			setColorImages(data?.data.message.productSet.itemSet[0].images);
		}
	}, [data]);

	function onChangeColor(item) {
		setColor(item.color);
		setColorImages(item.images);
	}

	if (isLoading) {
		return (
			<div className='flex justify-center'>
				<Loader />
			</div>
		);
	} else
		return (
			<div>
				<div className='md:grid block grid-cols-7'>
					<section className='col-span-4'>
						<ProductPageImageSlider slides={colorImages} />
					</section>
					<section className='col-span-3 lg:p-14 p-8 md:text-left text-center'>
						<h4 className='lg:text-2xl text-xl font-bold text-colorFive'>
							{data.data.message.name}
						</h4>
						<h6 className='font-semibold lg:text-xl text-lg text-colorThree mt-2'>
							PKR {data.data.message.price}
						</h6>
						<div className='flex lg:gap-x-2 gap-x-1 mt-5 items-center md:justify-start justify-center'>
							<StarIcon className='w-4' />
							<StarIcon className='w-4' />
							<StarIcon className='w-4' />
							<StarIcon className='w-4' />
							<StarIcon className='w-4' />
							<p className='text-sm mx-1 leading-[0px]'>
								{data.data.message.reviewsOverview.rating}
							</p>
							<p>|</p>
							<a className='text-sm underline ml-1' href='#reviews'>
								See reviews
							</a>
						</div>
						<hr className='mt-10 border border-colorFour' />
						{data.data.message.variation && (
							<div className='mt-12'>
								<p>color</p>
								<div className='flex gap-x-4 mt-3 justify-center sm:justify-start'>
									{data.data.message.productSet.itemSet.map((item, i) => (
										<button
											key={i}
											className={`h-8 w-8 rounded-full outline ${
												color == item.color ? 'outline-3' : 'outline-1'
											} outline-offset-2 outline-colorFour`}
											onClick={() => {
												onChangeColor(item);
											}}
											style={{
												backgroundColor: item.color,
											}}
										/>
									))}
								</div>
							</div>
						)}
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
								accordionDetails={data.data.message.details}
								accordionName='Details'
							/>
							<hr className='border border-colorFour mt-6' />
							<ProductPageAccordion
								accordionDetails={data.data.message.description}
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
				<section className='sm:px-16 px-8 mt-16 w-full' id='reviews'>
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
					<section className='mt-10'>
						<Review />
						<Review />
						<Review />
						<div className='flex flex-col items-center'>
							<span className='text-sm text-colorFour'>
								Showing <span className='font-semibold text-colorFive'>1</span>{' '}
								to <span className='font-semibold text-colorFive'>3</span> of{' '}
								<span className='font-semibold text-colorFive'>30</span> Entries
							</span>
							<div className='inline-flex mt-2 xs:mt-0 text-colorFive border border-colorFour rounded-md divide-x divide-colorFour'>
								<button className='flex items-center justify-center px-3 h-8 text-sm font-medium rounded-l-md hover:bg-colorOne'>
									Prev
								</button>
								<button className='flex items-center justify-center px-3 h-8 text-sm font-medium hover:bg-colorOne rounded-r-md'>
									Next
								</button>
							</div>
						</div>
					</section>
				</section>
			</div>
		);
}
