import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../api/review';

export function useGetReviews(productId) {
	return useQuery({
		queryKey: ['review'],
		queryFn: () => getReviews(productId),
		enabled: !!productId,
	});
}
