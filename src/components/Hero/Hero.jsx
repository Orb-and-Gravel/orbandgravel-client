const Hero = () => {
	return (
		<section className='md:flex'>
			<picture className='md:w-2/4 '>
				<img
					src='https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGpld2Vscnl8ZW58MHx8MHx8&w=1000&q=80'
					alt='Orb & Gravel'
					className='object-cover w-full sm:h-72 md:h-full'
				/>
			</picture>
			<div className='md:w-2/4 bg-gradient-to-br from-colorHeader to-colorOne flex justify-center items-center pb-10'>
				<div>
					<p className='xl:text-[5.8rem] lg:text-[5rem] md:text-[4rem] sm:text-[5rem] text-[3rem] font-bold text-colorFour font-oswald tracking-tight'>
						Orb.&.Gravel
					</p>
					<p className='lg:text-2xl md:text-xl sm:text-2xl text-lg font-medium text-center text-colorFive'>
						Lorem ipsum lorem ipsum lorem
					</p>
					<button className='px-6 py-3 mt-7 tracking-widest font-semibold bg-colorFive text-colorOne hover:bg-colorFour transition-all duration-300 hover:scale-110 content-center relative m-auto grid'>
						SHOP NOW
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
