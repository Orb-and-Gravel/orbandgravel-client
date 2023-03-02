const Hero = () => {
	return (
		<section className='h-[32rem]'>
			<picture>
				<img
					src='https://images.unsplash.com/photo-1620656798579-1984d9e87df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
					alt='Orb & Gravel'
					className='object-cover w-full sm:h-72 md:h-full'
				/>
			</picture>
			{/* <div className='md:w-2/4 bg-gradient-to-br from-colorHeader to-colorOne flex justify-center items-center pb-10'>
				<div>
					<h1 className='xl:text-[5.8rem] lg:text-[5rem] md:text-[4rem] sm:text-[5rem] text-[3rem] font-bold text-colorFour font-oswald tracking-tight text-center'>
						Orb & Gravel
					</h1>
					<p className='lg:text-2xl md:text-xl sm:text-2xl text-lg font-medium text-center text-colorFive'>
						Lorem ipsum lorem ipsum lorem
					</p>
					<button className='px-4 py-1.5 rounded mt-7 tracking-widest font-semibold bg-colorFive text-colorOne hover:bg-colorFour transition-all duration-300 hover:scale-110 content-center relative m-auto grid'>
						SHOP NOW
					</button>
				</div>
			</div> */}
		</section>
	);
};

export default Hero;
