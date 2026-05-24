import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import { ErrorBar } from '../components/Error/ErrorBar';
import { useSignUp } from '../query/hooks/useUser';
import { LoadingButtonAnim } from '../assets/LoadingButtonAnim';

const signUpValidationSchema = Yup.object().shape({
	firstName: Yup.string().trim().required('First name is required'),
	lastName: Yup.string().trim(),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is Required'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters long'),
	confirmPassword: Yup.string()
		.required('Please confirm your password')
		.oneOf([Yup.ref('password')], 'Passwords must match'),
});

export function SignUp() {
	const [searchParams] = useSearchParams();
	const redirectTo = searchParams.get('redirect') || '/';

	const {
		mutate: handleSignUp,
		error: signUpError,
		isPending: signUpPending,
	} = useSignUp(redirectTo);

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: signUpValidationSchema,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: ({ firstName, lastName, email, password }) => {
			handleSignUp({ firstName, lastName, email, password });
		},
	});

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
				<form className='mt-3' onSubmit={formik.handleSubmit}>
					<input
						type='text'
						name='firstName'
						placeholder='First Name'
						onChange={formik.handleChange}
						value={formik.values.firstName}
						className={`border rounded-lg outline-none px-4 py-2 w-full ${
							formik.errors.firstName ? 'border-red-600' : 'border-colorTwo'
						}`}
					/>
					<input
						type='text'
						name='lastName'
						placeholder='Last Name (optional)'
						onChange={formik.handleChange}
						value={formik.values.lastName}
						className='border border-colorTwo rounded-lg outline-none px-4 py-2 w-full mt-2'
					/>
					<input
						type='email'
						name='email'
						placeholder='Email'
						onChange={formik.handleChange}
						value={formik.values.email}
						className={`border rounded-lg outline-none px-4 py-2 w-full mt-2 ${
							formik.errors.email ? 'border-red-600' : 'border-colorTwo'
						}`}
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						onChange={formik.handleChange}
						value={formik.values.password}
						className={`border rounded-lg outline-none px-4 py-2 w-full mt-2 ${
							formik.errors.password ? 'border-red-600' : 'border-colorTwo'
						}`}
					/>
					<input
						type='password'
						name='confirmPassword'
						placeholder='Confirm Password'
						onChange={formik.handleChange}
						value={formik.values.confirmPassword}
						className={`border rounded-lg outline-none px-4 py-2 w-full mt-2 ${
							formik.errors.confirmPassword
								? 'border-red-600'
								: 'border-colorTwo'
						}`}
					/>
					<div className='space-y-1 mt-1'>
						<ErrorBar message={formik.errors.firstName} />
						<ErrorBar message={formik.errors.email} />
						<ErrorBar message={formik.errors.password} />
						<ErrorBar message={formik.errors.confirmPassword} />
						<ErrorBar message={signUpError?.response?.data?.message} />
					</div>
					<button
						className='bg-colorOne text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32 block mx-auto mt-3
					hover:bg-colorFive hover:text-colorOne hover:scale-105 transition-all'
						type='submit'
					>
						{signUpPending ? <LoadingButtonAnim /> : 'Register'}
					</button>
				</form>
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
