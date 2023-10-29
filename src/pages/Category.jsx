import React from 'react';
import { useParams } from 'react-router-dom';
import category from '../assets/categories.json';

export function Category() {
	const { categoryId } = useParams();
	const catData = category[categoryId - 1];
	return (
		<div className='px-4'>
			<p>{catData.categoryId}</p>
			<p>{catData.categoryName}</p>
			<img
				src={catData.banner}
				alt={catData.categoryName}
				className='w-full h-[300px] object-cover rounded-xl'
			/>
		</div>
	);
}
