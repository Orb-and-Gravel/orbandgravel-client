import { useQuery } from '@tanstack/react-query';
import { signIn } from '../api/user';

export function useSignIn(email, password) {
	return useQuery({
		queryKey: ['signIn'],
		queryFn: () => signIn(email, password),
	});
}
