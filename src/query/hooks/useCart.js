import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addToCart, getCart, updateCartItemQuantity } from '../api/cart';

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
		mutationFn: ({ userHash, productId }) => addToCart(userHash, productId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getCart'] });
		},
	});
}

export function useUpdateCartItemQuantity() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['updateCartItemQuantity'],
		mutationFn: ({ cartId, productId, action }) =>
			updateCartItemQuantity(cartId, productId, action),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getCart'] });
		},
	});
}

export function useDeleteCartProduct() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['deleteCartProduct'],
		mutationFn: ({ cartId, productId }) =>
			updateCartItemQuantity(cartId, productId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getCart'] });
		},
	});
}
