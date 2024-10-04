import { useMutation } from '@tanstack/react-query';
import { signIn } from '../api/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signedInUser } from '../../redux/slices/userSlice';

export function useSignIn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return useMutation({
		mutationKey: ['signIn'],
		mutationFn: ({ email, password }) => signIn(email, password),
		onSuccess: (data) => {
			navigate('/');
			dispatch(signedInUser(data.data.user));
		},
	});
}
