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
			<section className='mt-4'>
				<h3 className='md:text-4xl lg:text-6xl md:font-oswald text-colorFive whitespace-nowrap text-5xl font-black font-poiret tracking-tight md:block flex justify-center uppercase'>
					{catData.categoryName}
				</h3>
			</section>
		</div>
	);
}
