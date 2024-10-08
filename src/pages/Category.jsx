import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CatProductItem } from '../components/Products/CatProductItem';
import { useNavigate } from 'react-router-dom';
import { useGetAllCategory } from '../query/hooks/useCategory';
import { Loader } from '../components/Loader/Loader';
import { ErrorDialog } from '../components/Error/ErrorDialog';
import { useGetProductsByCategory } from '../query/hooks/useProduct';

export function Category() {
	const { slug } = useParams();
	const navigate = useNavigate();
	const { data, isLoading, isError, error } = useGetAllCategory();
	const [catData, setCatData] = useState();
	const { data: productsData } = useGetProductsByCategory(catData);

	function fetchData() {
		for (let cat of data?.data?.message) {
			if (cat.slug === slug) {
				setCatData(cat);
				return;
			}
		}
		if (!catData) {
			navigate('/error');
		}
	}

	useEffect(() => {
		if (!isLoading && !isError) {
			fetchData();
		}
	}, [isLoading]);

	if (isLoading) {
		return (
			<div className='flex justify-center'>
				<Loader />
			</div>
		);
	} else if (isError) {
		return <ErrorDialog errorText={error.response.data.message} />;
	} else
		return (
			<div className='p-4'>
				<div className='relative'>
					<img
						src={catData?.banner}
						alt={catData?.name}
						className='w-full h-[25rem] object-cover rounded-xl'
					/>
					<div className='absolute inset-0 m-auto max-h-fit max-w-fit'>
						<h1
							className='font-poiret xl:text-[7rem] lg:text-[6rem] sm:text-[5rem] text-[3rem] tracking-tight text-center max-w-fit sm:px-10 px-3'
							style={{
								color: '#E0E0FF',
								mixBlendMode: 'normal',
								textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
								WebkitTextStroke: '1px #E3C584',
							}}
						>
							{catData?.name}
						</h1>
					</div>
				</div>
				<section className='mt-4 sm:flex sm:justify-between'>
					<h3 className='lg:text-6xl sm:font-oswald text-colorFive whitespace-nowrap text-5xl font-black font-poiret tracking-tight md:block flex justify-center uppercase'>
						{catData?.name}
					</h3>
					<div className='sm:flex sm:items-center gap-x-2 sm:w-64 text-center mt-5 sm:mt-0'>
						<p className='whitespace-nowrap'>Sort by</p>
						<select
							name='sort'
							id='sort-categories'
							className='bg-colorHeader text-colorFive p-2 w-full rounded-md border border-colorTwo focus-visible:outline-none cursor-pointer'
						>
							<option value='popularity' className='text-colorFour bg-white'>
								Popularity
							</option>
							<option value='date' className='text-colorFour bg-white'>
								Date
							</option>
							<option value='ratings' className='text-colorFour bg-white'>
								Ratings
							</option>
							<option value='bestseller' className='text-colorFour bg-white'>
								Best Seller
							</option>
							<option value='new' className='text-colorFour bg-white'>
								New
							</option>
						</select>
					</div>
				</section>
				<section className='flex lg:justify-between flex-wrap gap-10 justify-center mt-10'>
					{catData &&
						productsData?.data?.status &&
						productsData?.data?.message?.map((product) => (
							<div key={product._id}>
								<CatProductItem product={product} />
							</div>
						))}
				</section>
			</div>
		);
}
