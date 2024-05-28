import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../api/product';

export function useGetProductsByCategory(categoryId, categoryName) {
	return useQuery({
		queryKey: ['categoryProducts', categoryName],
		queryFn: () => getProductsByCategory(categoryId),
	});
}
