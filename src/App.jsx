import React, { useState } from 'react';
import { Carousel } from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
	const [open, setOpen] = useState(false);
	return (
		<React.Fragment>
			<Header setOpen={setOpen} open={open} />
			<section className={`sm:block ${!open && 'hidden'}`}>
				<Navbar />
			</section>
			<Hero />
			<Carousel />
		</React.Fragment>
	);
}

export default App;
