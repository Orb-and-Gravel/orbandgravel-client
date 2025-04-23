import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
	checkWishlistItem,
	getWishlist,
	toggleWishlistItem,
} from '../api/wishlist';

export function useGetWishlist(userId) {
	return useQuery({
		queryKey: ['wishlist'],
		queryFn: () => getWishlist(),
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
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ productId }) => toggleWishlistItem(productId),
		onSuccess: () => {
			queryClient.invalidateQueries(['checkWishlist']);
		},
	});
}
