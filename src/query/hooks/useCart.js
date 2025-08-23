import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addToCart, getCart } from '../api/cart';

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
