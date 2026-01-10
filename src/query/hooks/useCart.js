import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
	addToCart,
	deleteCartProduct,
	getCart,
	updateCartItemQuantity,
} from '../api/cart';

export function useGetCart(guestHash) {
	return useQuery({
		queryKey: ['getCart'],
		queryFn: () => getCart(guestHash),
		enabled: !!guestHash,
	});
}

export function useAddToCart() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['addToCart'],
		mutationFn: ({ userHash, productId, color }) =>
			addToCart(userHash, productId, color),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getCart'] });
		},
	});
}

export function useUpdateCartItemQuantity() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['updateCartItemQuantity'],
		mutationFn: ({ cartId, itemId, action }) =>
			updateCartItemQuantity(cartId, itemId, action),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getCart'] });
		},
	});
}

export function useDeleteCartProduct() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['deleteCartProduct'],
		mutationFn: ({ cartId, itemId }) => deleteCartProduct(cartId, itemId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getCart'] });
		},
	});
}
