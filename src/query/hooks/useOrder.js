import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getOrder, getOrders, placeOrder } from '../api/order';

export function usePlaceOrder() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['placeOrder'],
		mutationFn: (orderData) => placeOrder(orderData),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getCart'] });
			queryClient.invalidateQueries({ queryKey: ['getOrders'] });
		},
	});
}

export function useGetOrders(userId) {
	return useQuery({
		queryKey: ['getOrders'],
		queryFn: () => getOrders(),
		enabled: !!userId,
	});
}

export function useGetOrder(orderNumber) {
	return useQuery({
		queryKey: ['getOrder', orderNumber],
		queryFn: () => getOrder(orderNumber),
		enabled: !!orderNumber,
	});
}
