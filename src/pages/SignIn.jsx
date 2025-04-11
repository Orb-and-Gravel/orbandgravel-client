import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorBar } from '../components/Error/ErrorBar';
import { useSignIn } from '../query/hooks/useUser';
import { LoadingButtonAnim } from '../assets/LoadingButtonAnim';

const signInValidationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is Required'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters long'),
});

export function SignIn() {
	const {
		mutate: handleSignIn,
		error: signInError,
		isPending: signInPending,
	} = useSignIn();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: signInValidationSchema,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: (values) => {
			handleSignIn(values);
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
						className={`border border-b-0 rounded-t-lg outline-none px-4 py-2 w-full ${
							formik.errors.email ? 'border-red-600' : 'border-colorTwo'
						}`}
						placeholder='email'
						name='email'
						type='email'
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					<input
						type='password'
						placeholder='password'
						name='password'
						onChange={formik.handleChange}
						value={formik.values.password}
						className={`border rounded-b-lg outline-none px-4 py-2 w-full ${
							formik.errors.password ? 'border-red-600' : 'border-colorTwo'
						}`}
					/>
					<div className='space-y-1 mt-1'>
						<ErrorBar message={formik.errors.email} />
						<ErrorBar message={formik.errors.password} />
						<ErrorBar message={signInError?.response.data.message} />
					</div>
					<button
						className='bg-colorOne text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32 block mx-auto mt-3
				hover:bg-colorFive hover:text-colorOne hover:scale-105 transition-all'
						type='submit'
					>
						{signInPending ? <LoadingButtonAnim /> : 'Enter'}
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
