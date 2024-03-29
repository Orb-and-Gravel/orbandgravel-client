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
					width={280}
					height={360}
				/>
			</div>
			<div className='grid grid-cols-2 2xl:px-20 2xl:py-32 xl:px-10 xl:py-16 gap-5 justify-items-center'>
				<ProductItem
					imgUrl='https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
					name='Necklace Silver'
					price='PKR 2300'
					alt='alt img'
					width={280}
					height={360}
				/>
				<ProductItem
					imgUrl='https://images.unsplash.com/photo-1636103952204-0b738c225264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
					name='Necklace Golden'
					price='PKR 1500'
					alt='alt img'
					width={280}
					height={360}
				/>
				<ProductItem
					imgUrl='https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
					name='Necklace Blue'
					price='PKR 7500'
					alt='alt img'
					width={280}
					height={360}
				/>
				<ProductItem
					imgUrl='https://images.unsplash.com/photo-1620656798579-1984d9e87df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
					name='Necklace Name Long'
					price='PKR 1800'
					alt='alt img'
					width={280}
					height={360}
				/>
			</div>
		</div>
	);
}
