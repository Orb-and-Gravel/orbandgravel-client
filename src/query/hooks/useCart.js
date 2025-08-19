import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/cart';

export function useGetCart(guestHash) {
	return useQuery({
		queryKey: ['getCart'],
		queryFn: () => getCart(guestHash),
		enabled: !!guestHash,
	});
}
