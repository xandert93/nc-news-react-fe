import { api } from '../../../api'

export const getByUsername = async (username) => {
  const { user } = await api.get(`/users/${username}`)
  return user
}
