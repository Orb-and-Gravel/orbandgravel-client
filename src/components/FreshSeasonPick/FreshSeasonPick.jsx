import React from 'react';
import { SeasonProductItem } from '../Products/SeasonProductItem';

export function FreshSeasonPick() {
	return (
		<div className='md:flex md:justify-between md:gap-x-3 grid grid-cols-2 justify-items-center gap-10'>
			<SeasonProductItem
				imgUrl='https://plus.unsplash.com/premium_photo-1675719330802-537e44150023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
				name='Diamond'
				alt='Diamond pic'
			/>
			<SeasonProductItem
				imgUrl='https://images.unsplash.com/photo-1551947391-249dcb8ed976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
				name='Gemstone'
				alt='Gemstone pic'
			/>
			<SeasonProductItem
				imgUrl='https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80'
				name='Stone'
				alt='Stone pic'
			/>
			<SeasonProductItem
				imgUrl='https://plus.unsplash.com/premium_photo-1671647122567-ade48287e971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
				name='Marble'
				alt='Marble pic'
			/>
		</div>
	);
}
