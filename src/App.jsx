import React, { useState } from 'react';
import { Carousel } from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
	const [open, setOpen] = useState(false);
	return (
		<div className='font-nunito'>
			<Header setOpen={setOpen} open={open} />
			<section className={`sm:block ${!open && 'hidden'}`}>
				<Navbar />
			</section>
			<Hero />
			<div className='mx-10'>
				<section className='mt-4'>
					<h3 className='text-5xl font-black font-oswald mb-2 text-colorFour tracking-tight'>
						BEST SELLER
					</h3>
					<Carousel />
				</section>
			</div>
		</div>
	);
}

export default App;
