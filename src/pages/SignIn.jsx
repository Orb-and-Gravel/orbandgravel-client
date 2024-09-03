import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const signInValidationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is Required'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters long'),
});

export function SignIn() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: signInValidationSchema,
		onSubmit: (values) => {
			console.log({ values });
		},
	});

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
				<form className='mt-3' onSubmit={formik.handleSubmit}>
					<input
						className='border border-colorTwo border-b-0 rounded-t-lg outline-none px-4 py-2 w-full'
						placeholder='email'
						name='email'
						type='email'
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					<input
						type='password'
						placeholder='password'
						className='border border-colorTwo rounded-b-lg outline-none px-4 py-2 w-full'
					/>
					<button
						className='bg-colorOne text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32 block mx-auto mt-3
				hover:bg-colorFive hover:text-colorOne hover:scale-105 transition-all'
						type='submit'
					>
						Enter
					</button>
				</form>
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
