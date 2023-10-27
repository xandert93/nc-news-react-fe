import { useQuery } from '@tanstack/react-query'
import { userApi } from './features/user/api'

export const useAuthUser = () => {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ['auth-user'],
    queryFn: () => userApi.getByUsername('grumpy19'),
  })

  return { isLoading, user, error }
}
