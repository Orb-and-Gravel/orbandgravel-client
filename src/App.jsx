import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Category } from './pages/Category';
import Header from './components/Header/Header';
import { CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar/Navbar';
import { CartDropdownMenuSmallScreen } from './components/Header/CartDropdownMenuSmallScreen';
import Footer from './components/Footer/Footer';

function App() {
	const [openNav, setOpenNav] = useState(false);
	const [openCartDropdown, setOpenCartDropdown] = useState(false);
	const navRef = useRef(null);
	const cartRef = useRef(null);
	return (
		<main className='font-nunito'>
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
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/category/:categoryId' element={<Category />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</main>
	);
}

export default App;
