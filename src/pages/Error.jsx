import React from 'react';

export function Error() {
	return (
		<section className='text-center'>
			<h3
				className='md:text-[13rem] text-[7rem] font-black font-oswald bg-error-image bg-cover bg-center'
				style={{
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				}}
			>
				Oops!
			</h3>
			<h5 className='font-black tracking-wide text-xl'>404 - PAGE NOT FOUND</h5>
			<p className='mt-5 text-sm'>
				The page you are looking for is not available
			</p>
			<a href='/'>
				<button className='text-colorOne bg-colorFive px-7 py-2 rounded-full mt-1'>
					GO TO HOMEPAGE
				</button>
			</a>
		</section>
	);
}
