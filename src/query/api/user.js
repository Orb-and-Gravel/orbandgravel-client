import { axiosbase } from '../../axiosConfig';

export async function signIn(email, password) {
	const body = {
		email,
		password,
	};
	return await axiosbase.post('/user/signIn', { ...body });
}
