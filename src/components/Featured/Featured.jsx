import React from 'react';
import { ProductItem } from '../Products/ProductItem';

export function Featured() {
	return (
		<div className='md:grid md:grid-cols-2 md:gap-x-12'>
			<div className='mb-5 md:mb-0'>
				<img
					className='rounded-xl h-full w-full object-cover'
					alt='alt feature img'
					loading='lazy'
					src='https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
				/>
			</div>
			<div className='grid grid-cols-2 items-center justify-items-center 2xl:px-20 2xl:py-32 xl:px-10 xl:py-16 gap-5'>
				<ProductItem
					imgUrl='https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
					name='Necklace Name Long'
					price='PKR 1800'
					alt='alt img'
				/>
				<ProductItem
					imgUrl='https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
					name='Necklace Name Long'
					price='PKR 1800'
					alt='alt img'
				/>
				<ProductItem
					imgUrl='https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
					name='Necklace Name Long'
					price='PKR 1800'
					alt='alt img'
				/>
				<ProductItem
					imgUrl='https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
					name='Necklace Name Long'
					price='PKR 1800'
					alt='alt img'
				/>
			</div>
		</div>
	);
}
