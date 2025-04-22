import React from 'react';

export function SignUp() {
	return (
		<div className='bg-colorHeader h-screen'>
			<section className='lg:w-1/3 w-2/3 mx-auto pt-20'>
				<a href='/'>
					<img
						src='/ong-logo.png'
						alt='Orb & Gravel'
						className='mx-auto'
						width={300}
						height={300}
					/>
				</a>
				<h2 className='text-center font-semibold font-oswald text-colorFive text-2xl mt-8 tracking-wide'>
					SIGN UP
				</h2>
				<form className='mt-3'>
					<input
						type='text'
						className='border border-colorTwo rounded-lg outline-none px-4 py-2 w-full'
						placeholder='Full Name'
					/>
					<input
						type='text'
						placeholder='Phone Number'
						className='border border-colorTwo rounded-lg outline-none px-4 py-2 w-full mt-2'
					/>
					<input
						type='email'
						className='border border-colorTwo rounded-lg outline-none px-4 py-2 w-full mt-2'
						placeholder='Email'
					/>
					<input
						type='password'
						placeholder='Password'
						className='border border-colorTwo rounded-lg outline-none px-4 py-2 w-full mt-2'
					/>
					<input
						type='password'
						placeholder='Confirm Password'
						className='border border-colorTwo rounded-lg outline-none px-4 py-2 w-full mt-2'
					/>
				</form>
				<button
					className='bg-colorOne text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32 block mx-auto mt-3
				hover:bg-colorFive hover:text-colorOne hover:scale-105 transition-all'
				>
					Register
				</button>
				<span className='block mt-4 text-xs text-center'>
					Already registered?{' '}
					<a className='text-colorThree' href='/sign-in'>
						Sign In
					</a>
				</span>
			</section>
		</div>
	);
}
