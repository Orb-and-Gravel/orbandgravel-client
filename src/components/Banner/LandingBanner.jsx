import React from 'react';

export function LandingBanner() {
	return (
		<section className='flex xl:flex-row flex-col items-center justify-between bg-colorFive px-5 py-14'>
			<div className='xl:w-[300px]'>
				<img src='/ong-svg.svg' alt='logo-alternate' className='w-[200px]' />
			</div>
			<div className='text-center mt-2 xl:mt-0'>
				<h2 className='text-colorOne font-poiret text-5xl font-bold'>
					Orb & Gravel
				</h2>
				<h3 className='text-colorOne text-lg'>Marketplace</h3>
				<button className='text-colorFive bg-colorOne px-7 py-2 rounded-full font-extrabold mt-2 hover:bg-colorTwo transition-all'>
					Shop Now
				</button>
			</div>
			<div className='w-[300px] xl:block hidden'>
				<img src='/ong-logo.png' alt='logo' />
			</div>
		</section>
	);
}
