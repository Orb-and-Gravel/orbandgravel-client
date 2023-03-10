import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Bar } from './components/Bar/Bar';
import { Carousel } from './components/Carousel/Carousel';
import { CategoriesSection } from './components/CategoriesSection/CategoriesSection';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

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
				<section ref={navRef} className={`sm:block ${!open && 'hidden'}`}>
					<Navbar />
				</section>
			</CSSTransition>
			<Hero />
			<div className='xl:mx-10 lg:mx-7 md:mx-4 mx-2 flex justify-center'>
				<section className='mt-4'>
					<h3 className='text-5xl font-black font-poiret mb-2 text-colorFive tracking-tight text-center sm:text-left'>
						BEST SELLERS
					</h3>
					<Carousel />
				</section>
			</div>
			<section className='xl:mx-10 lg:mx-7 md:mx-4 mx-2 flex justify-center'>
				<CategoriesSection />
			</section>
			<section className='mt-10'>
				<Bar />
			</section>
		</div>
	);
}

export default App;
