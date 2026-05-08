import axios from 'axios';
import Cookies from 'js-cookie';

export const axiosbase = axios.create({
	baseURL: import.meta.env.VITE_BASEURL,
});

axiosbase.interceptors.request.use((config) => {
	const token = Cookies.get('token');
	if (token) {
		config.headers.Authorization = `bearer ${token}`;
	}
	return config;
});
