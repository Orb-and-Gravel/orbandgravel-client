const Hero = () => {
	return (
		<section className='-z-10 relative max-h-[35rem]'>
			<picture>
				<img
					src='https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
					alt='Orb & Gravel'
					className='object-cover w-full max-h-[35rem]'
				/>
			</picture>
			<div className='absolute max-h-fit inset-0 top-1/3'>
				<h1
					className='font-poiret xl:text-[7rem] lg:text-[6rem] sm:text-[5rem] text-[3rem] text-colorOne tracking-tight text-center'
					style={{ textShadow: '2px 2px 2px #8d7943' }}
				>
					Orb & Gravel
				</h1>
			</div>
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
