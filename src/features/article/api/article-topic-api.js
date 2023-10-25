import { api } from '../../../api'

export const getMany = async (params) => {
  const { topics } = await api.get('/article-topics')
  return topics
}
