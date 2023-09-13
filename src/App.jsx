import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Carousel } from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { VerticalAlternateList } from './components/VerticalAlternateList/VerticalAlternateList';
import { CartDropdownMenuSmallScreen } from './components/Header/CartDropdownMenuSmallScreen';
import { Featured } from './components/Featured/Featured';
import { FreshSeasonPick } from './components/FreshSeasonPick/FreshSeasonPick';
import { LandingBanner } from './components/Banner/LandingBanner';
import Footer from './components/Footer/Footer';

function App() {
	const [openNav, setOpenNav] = useState(false);
	const [openCartDropdown, setOpenCartDropdown] = useState(false);
	const navRef = useRef(null);
	const cartRef = useRef(null);
	return (
		<div className='font-nunito'>
			<Header
				setOpenNav={setOpenNav}
				openNav={openNav}
				openCartDropdown={openCartDropdown}
				setOpenCartDropdown={setOpenCartDropdown}
				cartRef={cartRef}
			/>
			<CSSTransition
				nodeRef={navRef}
				in={openNav}
				timeout={300}
				classNames='my-node'
			>
				<section
					ref={navRef}
					className={`sm:block relative ${!openNav && 'hidden'} z-10`}
				>
					<Navbar />
				</section>
			</CSSTransition>
			<CSSTransition
				nodeRef={cartRef}
				in={openCartDropdown}
				timeout={300}
				classNames='my-node'
			>
				<section
					ref={cartRef}
					className={`sm:hidden relative ${!openCartDropdown && 'hidden'} z-10`}
				>
					<CartDropdownMenuSmallScreen />
				</section>
			</CSSTransition>
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
			<Footer />
		</div>
	);
}

export default App;
