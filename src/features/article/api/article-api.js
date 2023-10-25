import { api } from '../../../api'

export const getMany = async (params) => {
  const { articles } = await api.get('/articles', { params })
  return articles
}

export const createOne = async (newArticle) => {
  const { article } = await api.post('/articles', newArticle)
  return article
}

export const getById = async (id) => {
  const { article } = await api.get('/articles/' + id)
  return article
}

export const updateRatingById = async ({ id, incVal }) => {
  const { article } = await api.patch(`/articles/${id}/vote_count`, { incVal })
  return article
}

export const getCommentsByArticleId = async (id) => {
  const { comments } = await api.get(`/articles/${id}/comments`)
  return comments
}
