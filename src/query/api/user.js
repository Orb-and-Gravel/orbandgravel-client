import { axiosbase } from '../../axiosConfig';
import Cookies from 'js-cookie';

export async function signIn(email, password) {
	const body = {
		email,
		password,
	};
	const signedUser = await axiosbase.post('/user/signIn', { ...body });
	if (signedUser.status === 200) {
		Cookies.set('token', signedUser.data.token);
	}
	return signedUser;
}
