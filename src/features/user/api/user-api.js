import { api } from '../../../api'

export const getByUsername = async (username) => {
  const { user } = await api.get(`/users/${username}`)
  return user
}

export const getArticlesByUsername = async (username, params) => {
  const { articles } = await api.get(`/users/${username}/articles`, params)
  return articles
}
