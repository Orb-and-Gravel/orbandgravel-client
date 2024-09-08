import { useMutation, useQuery } from '@tanstack/react-query';

import {
	checkWishlistItem,
	getWishlist,
	toggleWishlistItem,
} from '../api/wishlist';

export function useGetWishlist(userId) {
	return useQuery({
		queryKey: ['wishlist', userId],
		queryFn: () => getWishlist(userId),
		enabled: !!userId,
	});
}

export function useCheckWishlistItem(userId, productId) {
	return useQuery({
		queryKey: ['checkWishlist', productId, userId],
		queryFn: () => checkWishlistItem(userId, productId),
		enabled: !!userId && !!productId,
	});
}

export function useToggleWishlistItem() {
	return useMutation({
		mutationFn: ({ userId, productId }) =>
			toggleWishlistItem(userId, productId),
	});
}
