import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory, getSingleProduct } from '../api/product';

export function useGetProductsByCategory(categoryData) {
	return useQuery({
		queryKey: ['categoryProducts', categoryData?.name],
		queryFn: () => getProductsByCategory(categoryData?._id),
		enabled: !!categoryData,
	});
}

export function useGetSingleProduct(slug) {
	return useQuery({
		queryKey: ['singleProduct', slug],
		queryFn: () => getSingleProduct(slug),
	});
}
