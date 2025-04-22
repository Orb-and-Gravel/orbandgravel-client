import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/category';

export function useGetAllCategory() {
	return useQuery({
		queryKey: ['getAllCategory'],
		queryFn: getCategories,
		cacheTime: Infinity,
		staleTime: Infinity,
	});
}
