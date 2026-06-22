import { useEffect, useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	setSignedInUser,
	setAccessToken,
	logoutUser,
} from '../../redux/slices/userSlice';
import {
	signIn,
	signUp,
	updateProfile,
	refresh,
	signOut,
} from '../api/user';
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
			if (data.accessToken && data.user) {
				dispatch(setAccessToken(data.accessToken));
				dispatch(setSignedInUser(data.user));
				if (guestHash) mergeGuestCart(guestHash);
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
			if (data.accessToken && data.user) {
				dispatch(setAccessToken(data.accessToken));
				dispatch(setSignedInUser(data.user));
				if (guestHash) mergeGuestCart(guestHash);
				navigate(redirectTo, { replace: true });
			}
		},
	});
}

export function useUpdateProfile() {
	const dispatch = useDispatch();

	return useMutation({
		mutationKey: ['updateProfile'],
		mutationFn: (values) => updateProfile(values),
		onSuccess: ({ data }) => {
			if (data.user) dispatch(setSignedInUser(data.user));
			if (data.accessToken) dispatch(setAccessToken(data.accessToken));
		},
	});
}

export function useSignOut() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	return async function performSignOut(redirectTo = '/') {
		try {
			await signOut();
		} catch {
			// best-effort
		}
		dispatch(logoutUser());
		queryClient.clear();
		navigate(redirectTo, { replace: true });
	};
}

export function useSessionBootstrap() {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();
	const ranRef = useRef(false);

	useEffect(() => {
		if (ranRef.current) return;
		ranRef.current = true;

		(async () => {
			try {
				const { data } = await refresh();
				if (data && data.accessToken && data.user) {
					dispatch(setAccessToken(data.accessToken));
					dispatch(setSignedInUser(data.user));
					queryClient.invalidateQueries({ queryKey: ['getCart'] });
					queryClient.invalidateQueries({ queryKey: ['getWishlist'] });
				}
			} catch {
				dispatch(logoutUser());
			}
		})();
	}, [dispatch, queryClient]);
}
