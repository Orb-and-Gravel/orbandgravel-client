import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorBar } from '../components/Error/ErrorBar';
import { LoadingButtonAnim } from '../assets/LoadingButtonAnim';
import { useUpdateProfile, useChangePassword } from '../query/hooks/useUser';

const profileValidationSchema = Yup.object().shape({
	firstName: Yup.string()
		.trim()
		.required('First name is required')
		.max(50, 'First name must be 50 characters or fewer'),
	lastName: Yup.string()
		.trim()
		.max(50, 'Last name must be 50 characters or fewer'),
});

const passwordValidationSchema = Yup.object().shape({
	currentPassword: Yup.string().required('Current password is required'),
	newPassword: Yup.string()
		.required('New password is required')
		.min(8, 'New password must be at least 8 characters long'),
	confirmPassword: Yup.string()
		.required('Please confirm your new password')
		.oneOf([Yup.ref('newPassword')], 'Passwords do not match'),
});

export function Account() {
	const { userRecord } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [isEditing, setIsEditing] = useState(false);

	const {
		mutate: updateProfile,
		error: updateError,
		isPending: updatePending,
	} = useUpdateProfile();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			firstName: userRecord?.firstName || '',
			lastName: userRecord?.lastName || '',
		},
		validationSchema: profileValidationSchema,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: (values) => {
			updateProfile(
				{
					firstName: values.firstName.trim(),
					lastName: values.lastName.trim(),
				},
				{
					onSuccess: () => setIsEditing(false),
				}
			);
		},
	});

	const [isChangingPassword, setIsChangingPassword] = useState(false);
	const [passwordChangedAt, setPasswordChangedAt] = useState(0);

	const {
		mutate: changePassword,
		error: changePasswordError,
		isPending: changePasswordPending,
		reset: resetChangePasswordMutation,
	} = useChangePassword();

	const passwordFormik = useFormik({
		initialValues: {
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
		validationSchema: passwordValidationSchema,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: (values, helpers) => {
			changePassword(
				{
					currentPassword: values.currentPassword,
					newPassword: values.newPassword,
				},
				{
					onSuccess: () => {
						helpers.resetForm();
						setIsChangingPassword(false);
						setPasswordChangedAt(Date.now());
					},
				}
			);
		},
	});

	if (!userRecord?._id) {
		navigate('/sign-in', { replace: true });
		return null;
	}

	const inputBaseClass =
		'w-full rounded-md p-2 outline-none border border-colorOne';
	const inputReadOnlyClass = `${inputBaseClass} bg-gray-50`;
	const inputEditableClass = `${inputBaseClass} bg-white focus:border-colorThree`;

	return (
		<div className='xl:m-10 lg:m-7 md:m-4 m-2'>
			<h2 className='sm:text-8xl text-5xl font-oswald font-black tracking-tight text-center'>
				Account Details
			</h2>
			<form className='mt-10 max-w-lg mx-auto' onSubmit={formik.handleSubmit}>
				<h5 className='text-xl font-semibold text-center'>
					Personal Information
				</h5>
				<div>
					<p className='mb-1 text-sm'>First Name</p>
					<input
						type='text'
						name='firstName'
						readOnly={!isEditing}
						value={formik.values.firstName}
						onChange={formik.handleChange}
						className={isEditing ? inputEditableClass : inputReadOnlyClass}
					/>
				</div>
				<div className='mt-4'>
					<p className='mb-1 text-sm'>Last Name</p>
					<input
						type='text'
						name='lastName'
						readOnly={!isEditing}
						value={formik.values.lastName}
						onChange={formik.handleChange}
						className={isEditing ? inputEditableClass : inputReadOnlyClass}
					/>
				</div>

				<div className='mt-10'>
					<h5 className='text-xl font-semibold text-center'>Email Address</h5>
					<div>
						<p className='mb-1 text-sm'>Email</p>
						<input
							type='email'
							readOnly
							value={userRecord.email || ''}
							className={inputReadOnlyClass}
						/>
					</div>
				</div>

				<div className='mt-4 space-y-1'>
					<ErrorBar message={formik.errors.firstName} />
					<ErrorBar message={formik.errors.lastName} />
					<ErrorBar message={updateError?.response?.data?.message} />
				</div>

				{isEditing ? (
					<div className='mt-3 flex justify-center gap-3'>
						<button
							type='button'
							onClick={() => {
								formik.resetForm();
								setIsEditing(false);
							}}
							className='bg-gray-100 text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32
								hover:bg-colorFive hover:text-colorOne hover:scale-105 transition-all'
						>
							Cancel
						</button>
						<button
							type='submit'
							disabled={updatePending}
							className='bg-colorOne text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32
								hover:bg-colorFive hover:text-colorOne hover:scale-105 transition-all'
						>
							{updatePending ? <LoadingButtonAnim /> : 'Save'}
						</button>
					</div>
				) : (
					<button
						type='button'
						onClick={() => setIsEditing(true)}
						className='bg-colorOne text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32 block mx-auto mt-3
							hover:bg-colorFive hover:text-colorOne hover:scale-105 transition-all'
					>
						Edit
					</button>
				)}
			</form>

			<form
				className='mt-10 max-w-lg mx-auto'
				onSubmit={passwordFormik.handleSubmit}
			>
				<h5 className='text-xl font-semibold text-center'>Change Password</h5>

				{isChangingPassword ? (
					<>
						<div className='mt-3'>
							<p className='mb-1 text-sm'>Current Password</p>
							<input
								type='password'
								name='currentPassword'
								autoComplete='current-password'
								value={passwordFormik.values.currentPassword}
								onChange={passwordFormik.handleChange}
								className={inputEditableClass}
							/>
						</div>
						<div className='mt-4'>
							<p className='mb-1 text-sm'>New Password</p>
							<input
								type='password'
								name='newPassword'
								autoComplete='new-password'
								value={passwordFormik.values.newPassword}
								onChange={passwordFormik.handleChange}
								className={inputEditableClass}
							/>
						</div>
						<div className='mt-4'>
							<p className='mb-1 text-sm'>Confirm New Password</p>
							<input
								type='password'
								name='confirmPassword'
								autoComplete='new-password'
								value={passwordFormik.values.confirmPassword}
								onChange={passwordFormik.handleChange}
								className={inputEditableClass}
							/>
						</div>

						<div className='mt-4 space-y-1'>
							<ErrorBar message={passwordFormik.errors.currentPassword} />
							<ErrorBar message={passwordFormik.errors.newPassword} />
							<ErrorBar message={passwordFormik.errors.confirmPassword} />
							<ErrorBar
								message={changePasswordError?.response?.data?.message}
							/>
						</div>

						<div className='mt-3 flex justify-center gap-3'>
							<button
								type='button'
								onClick={() => {
									passwordFormik.resetForm();
									resetChangePasswordMutation();
									setIsChangingPassword(false);
								}}
								className='bg-gray-100 text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32
									hover:bg-colorFive hover:text-colorOne hover:scale-105 transition-all'
							>
								Cancel
							</button>
							<button
								type='submit'
								disabled={changePasswordPending}
								className='bg-colorOne text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32
									hover:bg-colorFive hover:text-colorOne hover:scale-105 transition-all'
							>
								{changePasswordPending ? <LoadingButtonAnim /> : 'Save'}
							</button>
						</div>
					</>
				) : (
					<>
						{passwordChangedAt > 0 && (
							<p className='mt-3 text-center text-sm text-green-700'>
								Password updated.
							</p>
						)}
						<button
							type='button'
							onClick={() => {
								setPasswordChangedAt(0);
								setIsChangingPassword(true);
							}}
							className='bg-colorOne text-colorFive rounded-2xl px-3 py-1.5 lg:w-44 w-32 block mx-auto mt-3
								hover:bg-colorFive hover:text-colorOne hover:scale-105 transition-all'
						>
							Change Password
						</button>
					</>
				)}
			</form>
		</div>
	);
}
