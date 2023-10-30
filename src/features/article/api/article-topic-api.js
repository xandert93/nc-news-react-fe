import { api } from '../../../api'

export const get = async (params) => {
  const { topics } = await api.get('/article-topics')
  return topics
}
