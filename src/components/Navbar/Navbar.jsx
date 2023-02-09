const Navbar = () => {
	return (
		<nav className='absolute sm:static sm:bg-white/100 w-full backdrop-opacity-10 backdrop-invert bg-white/90'>
			<hr className='border-colorTwo' />
			<ul className='flex justify-between sm:items-center my-4 xl:mx-64 lg:mx-32 md:mx-16 sm:mx-4 sm:flex-row flex-col ml-6'>
				<li className='text-sm tracking-widest cursor-pointer text-colorFour hover:text-colorThree sm:mb-0 mb-3 transition-all'>
					JEWELRY
				</li>
				<li className='transition-all text-sm tracking-widest cursor-pointer text-colorFour hover:text-colorThree sm:mb-0 mb-3'>
					FINE JEWELRY
				</li>
				<li className='text-sm transition-all tracking-widest cursor-pointer text-colorFour hover:text-colorThree sm:mb-0 mb-3'>
					COLLECTION
				</li>
				<li className='text-sm transition-all tracking-widest cursor-pointer text-colorFour hover:text-colorThree sm:mb-0 mb-3'>
					MEN'S
				</li>
				<li className='text-sm tracking-widest transition-all cursor-pointer text-colorFour hover:text-colorThree sm:mb-0 mb-3'>
					WOMEN'S
				</li>
				<li className='text-sm tracking-widest cursor-pointer transition-all text-colorFour hover:text-colorThree sm:mb-0 mb-3'>
					GIFTS
				</li>
				<li className='text-sm tracking-widest cursor-pointer text-colorFour transition-all hover:text-colorThree sm:mb-0 mb-3'>
					SALE
				</li>
			</ul>
			<hr className='border-colorTwo' />
		</nav>
	);
};

export default Navbar;
