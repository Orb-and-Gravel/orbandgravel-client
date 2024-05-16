import React from 'react';

export function SignIn() {
	return (
		<div className='bg-colorHeader h-screen'>
			<section className='lg:w-1/3 w-2/3 mx-auto pt-20'>
				<img
					src='/ong-logo.png'
					alt='Orb & Gravel'
					className='mx-auto'
					width={300}
					height={300}
				/>
				<h2 className='text-center font-semibold font-oswald text-colorFive text-2xl mt-8 tracking-wide'>
					LOGIN
				</h2>
				<form className='mt-3'>
					<input
						type='email'
						className='border border-colorTwo border-b-0 rounded-t-lg outline-none px-4 py-2 w-full'
						placeholder='email'
					/>
					<br />
					<input
						type='password'
						placeholder='password'
						className='border border-colorTwo rounded-b-lg outline-none px-4 py-2 w-full'
					/>
				</form>
				<button className='bg-colorOne text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32 block mx-auto mt-3'>
					Enter
				</button>
				<span className='block mt-4 text-xs text-center'>
					Not registered yet?{' '}
					<a className='text-colorThree' href='/sign-up'>
						Sign Up
					</a>
				</span>
			</section>
		</div>
	);
}
