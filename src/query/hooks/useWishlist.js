import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
	checkWishlistItem,
	getWishlist,
	removeWishlistItem,
	toggleWishlistItem,
} from '../api/wishlist';

export function useGetWishlist(userId) {
	return useQuery({
		queryKey: ['wishlist'],
		queryFn: () => getWishlist(),
		enabled: !!userId,
	});
}

export function useCheckWishlistItem(productId, userId) {
	return useQuery({
		queryKey: ['checkWishlist', productId],
		queryFn: () => checkWishlistItem(productId),
		enabled: !!productId && !!userId,
	});
}

export function useToggleWishlistItem() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['toggleWishlist'],
		mutationFn: ({ productId, colorId }) =>
			toggleWishlistItem(productId, colorId),
		onSuccess: () => {
			queryClient.invalidateQueries(['checkWishlist']);
			queryClient.invalidateQueries(['wishlist']);
		},
	});
}

export function useRemoveWishlistItem() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['removeWishlistItem'],
		mutationFn: ({ productId }) => removeWishlistItem(productId),
		onSuccess: () => {
			queryClient.invalidateQueries(['wishlist']);
		},
	});
}
