import { api } from '../../../api'

export const get = async (params) => {
  const { articles } = await api.get('/articles', { params })
  return articles
}

export const getSuggested = async (params) => {
  const { articles } = await api.get('/articles/suggested', { params })
  return articles
}

export const create = async (newArticle) => {
  const { article } = await api.post('/articles', newArticle)
  return article
}

export const getById = async (id) => {
  const { article } = await api.get('/articles/' + id)
  return article
}

export const updateRating = async ({ id, incVal }) => {
  const { article } = await api.patch(`/articles/${id}/vote_count`, { incVal })
  return article
}

export const remove = (id) => {
  return api.delete(`/articles/${id}`)
}

export const getComments = async (id) => {
  const { comments } = await api.get(`/articles/${id}/comments`)
  return comments
}
