import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../api/product';

export function useGetProductsByCategory(categoryData) {
	return useQuery({
		queryKey: ['categoryProducts', categoryData?.name],
		queryFn: () => getProductsByCategory(categoryData?._id),
		enabled: !!categoryData,
	});
}
