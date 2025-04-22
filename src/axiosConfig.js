import axios from 'axios';
import Cookies from 'js-cookie';

export const axiosbase = axios.create({
	baseURL: import.meta.env.VITE_BASEURL,
	headers: {
		Authorization: `bearer ${Cookies.get('token')}`,
	},
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...
