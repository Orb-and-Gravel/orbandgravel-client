import React from 'react';
import { useParams } from 'react-router-dom';
import category from '../assets/categories.json';

export function Category() {
	const { categoryId } = useParams();
	const catData = category[categoryId - 1];
	return (
		<div className='p-4'>
			{/* <p>{catData.categoryId}</p> */}
			<img
				src={catData.banner}
				alt={catData.categoryName}
				className='w-full h-[25rem] object-cover rounded-xl'
			/>
			<section className='mt-4 flex justify-between'>
				<h3 className='md:text-4xl lg:text-6xl md:font-oswald text-colorFive whitespace-nowrap text-5xl font-black font-poiret tracking-tight md:block flex justify-center uppercase'>
					{catData.categoryName}
				</h3>
				<div className='flex items-center gap-x-2 w-64'>
					<p className='whitespace-nowrap'>Sort by</p>
					{/* !Todo: Replace select and options tag */}
					<select
						name='sort'
						id='sort-categories'
						className='bg-colorHeader text-colorFour p-2 w-full rounded-md border border-colorTwo'
					>
						<option value='popularity' className='bg-white'>
							Popularity
						</option>
						<option value='date'>Date</option>
						<option value='ratings'>Ratings</option>
						<option value='bestseller'>Best Seller</option>
						<option value='new'>New</option>
					</select>
				</div>
			</section>
		</div>
	);
}
