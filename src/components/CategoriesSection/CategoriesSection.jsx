import React from 'react';

export function CategoriesSection() {
	return (
		<div className='flex-[1_0_0%] max-w-[1760px] flex justify-between mt-14'>
			<img
				src='https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
				alt=''
				className='mt-32 xl:w-full lg:w-1/3 md:w-1/4 hidden md:block object-contain'
			/>
			<div className='text-center xl:w-full mx-auto'>
				<h5>Shop by Category</h5>
				<div className='mt-5'>
					<h3 className='cursor-pointer hover:underline decoration-2 text-5xl uppercase font-black font-oswald mb-7 text-colorFive tracking-tight underline-offset-2'>
						Jewelry
					</h3>
					<h3 className='cursor-pointer hover:underline decoration-2 text-5xl uppercase font-black font-oswald mb-7 text-colorFive tracking-tight underline-offset-2'>
						Fine Jewelry
					</h3>
					<h3 className='cursor-pointer hover:underline decoration-2 text-5xl uppercase font-black font-oswald mb-7 text-colorFive tracking-tight underline-offset-2'>
						Collections
					</h3>
					<h3 className='cursor-pointer hover:underline decoration-2 text-5xl uppercase font-black font-oswald mb-7 text-colorFive tracking-tight underline-offset-2'>
						Men's
					</h3>
					<h3 className='cursor-pointer hover:underline decoration-2 text-5xl uppercase font-black font-oswald mb-7 text-colorFive tracking-tight underline-offset-2'>
						Women's
					</h3>
					<h3 className='cursor-pointer hover:underline decoration-2 text-5xl uppercase font-black font-oswald mb-7 text-colorFive tracking-tight underline-offset-2'>
						Gifts
					</h3>
					<h3 className='cursor-pointer hover:underline decoration-2 text-5xl uppercase font-black font-oswald mb-7 text-colorFive tracking-tight underline-offset-2'>
						Sale
					</h3>
				</div>
			</div>
			<img
				src='https://images.unsplash.com/photo-1599459183200-59c7687a0275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'
				alt=''
				className='mt-48 xl:w-full lg:w-1/3 md:w-1/4 hidden md:block object-contain'
			/>
		</div>
	);
}
