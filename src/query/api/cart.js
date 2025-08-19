import { axiosbase } from '../../axiosConfig';

export async function getCart(guestHash) {
	const params = {
		guestHash,
	};
	return await axiosbase.get('/cart/getCart', { params });
}
