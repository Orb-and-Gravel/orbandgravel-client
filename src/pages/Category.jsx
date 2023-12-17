import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import category from '../assets/categories.json';
import { CatProductItem } from '../components/Products/CatProductItem';
import { useNavigate } from 'react-router-dom';

export function Category() {
	const { slug } = useParams();
	const navigate = useNavigate();
	const [catData, setCatData] = useState();

	function fetchData() {
		for (let cat of category) {
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
		fetchData();
	}, []);

	return (
		<div className='p-4'>
			<img
				src={catData?.banner}
				alt={catData?.categoryName}
				className='w-full h-[25rem] object-cover rounded-xl'
			/>
			<section className='mt-4 sm:flex sm:justify-between'>
				<h3 className='lg:text-6xl sm:font-oswald text-colorFive whitespace-nowrap text-5xl font-black font-poiret tracking-tight md:block flex justify-center uppercase'>
					{catData?.categoryName}
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
				<CatProductItem />
				<CatProductItem />
				<CatProductItem />
				<CatProductItem />
				<CatProductItem />
				<CatProductItem />
			</section>
		</div>
	);
}
