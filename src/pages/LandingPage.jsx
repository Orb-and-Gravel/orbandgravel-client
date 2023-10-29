import React from 'react';
import { Carousel } from '../components/Carousel/Carousel';
import Hero from '../components/Hero/Hero';
import { VerticalAlternateList } from '../components/VerticalAlternateList/VerticalAlternateList';
import { Featured } from '../components/Featured/Featured';
import { FreshSeasonPick } from '../components/FreshSeasonPick/FreshSeasonPick';
import { LandingBanner } from '../components/Banner/LandingBanner';

export function LandingPage() {
	return (
		<div>
			<Hero />
			<div className='xl:mx-10 lg:mx-7 md:mx-4 mx-2 flex justify-center relative'>
				<section className='mt-4'>
					<h3 className='md:text-4xl lg:text-6xl md:font-oswald text-colorFive whitespace-nowrap text-5xl font-black font-poiret tracking-tight md:block flex justify-center'>
						BEST SELLERS
					</h3>
					<Carousel />
				</section>
			</div>
			<div className='lg:mx-7 md:mx-4 mx-2 max-w-[1840px] xl:mx-auto xl:px-10 h-full'>
				<VerticalAlternateList />
			</div>
			<section className='lg:mx-7 md:mx-4 mx-2 max-w-[1840px] xl:mx-auto xl:px-10 h-full mt-4'>
				<h3 className='md:text-4xl lg:text-6xl md:font-oswald text-colorFive whitespace-nowrap text-5xl font-black font-poiret tracking-tight md:block flex justify-center'>
					FRESH FALL PICK
				</h3>
				<FreshSeasonPick />
			</section>
			<div className='mt-10'>
				<LandingBanner />
			</div>
			<section className='lg:mx-7 md:mx-4 mx-2 max-w-[1840px] xl:mx-auto xl:px-10 h-full mt-8'>
				<h3 className='md:text-4xl lg:text-6xl md:font-oswald text-colorFive whitespace-nowrap text-5xl font-black font-poiret tracking-tight md:block flex justify-center'>
					FEATURED
				</h3>
				<Featured />
			</section>
		</div>
	);
}
