import { axiosbase } from '../../axiosConfig';

export async function getCategories() {
	return await axiosbase.get('/category/getAll');
}
