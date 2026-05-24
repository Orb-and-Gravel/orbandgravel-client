import { useMutation } from '@tanstack/react-query';
import { signIn, signUp } from '../api/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSignedInUser } from '../../redux/slices/userSlice';
import { useMergeCart } from './useCart';

export function useSignIn(redirectTo = '/') {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { guestHash } = useSelector((state) => state.user);
	const { mutate: mergeGuestCart } = useMergeCart();

	return useMutation({
		mutationKey: ['signIn'],
		mutationFn: ({ email, password }) => signIn(email, password),
		onSuccess: ({ data }) => {
			if (data.token && data.user) {
				dispatch(setSignedInUser(data.user));
				if (guestHash) {
					mergeGuestCart(guestHash);
				}
				navigate(redirectTo, { replace: true });
			}
		},
	});
}

export function useSignUp(redirectTo = '/') {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { guestHash } = useSelector((state) => state.user);
	const { mutate: mergeGuestCart } = useMergeCart();

	return useMutation({
		mutationKey: ['signUp'],
		mutationFn: (values) => signUp(values),
		onSuccess: ({ data }) => {
			if (data.token && data.user) {
				dispatch(setSignedInUser(data.user));
				if (guestHash) {
					mergeGuestCart(guestHash);
				}
				navigate(redirectTo, { replace: true });
			}
		},
	});
}
