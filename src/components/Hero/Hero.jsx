import heroImage from '../../assets/heroimage.png';
const Hero = () => {
	return (
		<section className='-z-10 relative max-h-[35rem]'>
			<picture>
				<img
					src={heroImage}
					alt='Orb & Gravel'
					className='object-cover w-full max-h-[35rem]'
				/>
			</picture>
			<div className='absolute inset-0 m-auto max-h-fit max-w-fit'>
				<h1
					className='font-poiret xl:text-[7rem] lg:text-[6rem] sm:text-[5rem] text-[3rem] tracking-tight text-center max-w-fit sm:px-10 px-3'
					style={{
						color: '#E0E0FF',
						mixBlendMode: 'normal',
						border: '1px solid #E0E0FF',
						textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
						WebkitTextStroke: '1px #E3C584',
					}}
				>
					Orb & Gravel
				</h1>
			</div>
		</section>
	);
};

export default Hero;
