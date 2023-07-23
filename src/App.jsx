import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Carousel } from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { VerticalAlternateList } from './components/VerticalAlternateList/VerticalAlternateList';

function App() {
	const [open, setOpen] = useState(false);
	const navRef = useRef(null);
	return (
		<div className='font-nunito'>
			<Header setOpen={setOpen} open={open} />
			<CSSTransition
				nodeRef={navRef}
				in={open}
				timeout={300}
				classNames='my-node'
			>
				<section
					ref={navRef}
					className={`sm:block relative ${!open && 'hidden'} z-10`}
				>
					<Navbar />
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
		</div>
	);
}

export default App;
