import React, { useRef, useState } from 'react';
import Header from './Header';
import { CSSTransition } from 'react-transition-group';
import Navbar from '../Navbar/Navbar';

export function HeaderWhole() {
	const [openNav, setOpenNav] = useState(false);
	const [openCartDropdown, setOpenCartDropdown] = useState(false);
	const navRef = useRef(null);
	const cartRef = useRef(null);
	return (
		<React.Fragment>
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
					className={`sm:block relative ${!openNav && 'hidden'} z-50 sm:z-10`}
				>
					<Navbar />
				</section>
			</CSSTransition>
		</React.Fragment>
	);
}
