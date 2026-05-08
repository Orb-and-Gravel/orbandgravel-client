import { axiosbase } from '../../axiosConfig';

export async function placeOrder(orderData) {
	return await axiosbase.post('/order/placeOrder', orderData);
}

export async function getOrders() {
	return await axiosbase.get('/order/getOrders');
}

export async function getOrder(orderNumber) {
	return await axiosbase.get(`/order/getOrder/${orderNumber}`);
}
