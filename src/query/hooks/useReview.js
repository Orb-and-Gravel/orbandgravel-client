import { useQuery } from '@tanstack/react-query';
import { getReviews, getReviewsAnalytics } from '../api/review';

export function useGetReviews(productId, page, filter) {
	return useQuery({
		queryKey: ['review', page, filter],
		queryFn: () => getReviews(productId, page, filter),
		enabled: !!productId,
	});
}

export function useGetReviewsAnalytics(productId) {
	return useQuery({
		queryKey: ['reviewAnalytics'],
		queryFn: () => getReviewsAnalytics(productId),
		enabled: !!productId,
	});
}
