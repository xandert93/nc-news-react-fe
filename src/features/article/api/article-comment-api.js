import { api } from '../../../api'

export const createOne = async (newComment) => {
  const { comment } = await api.post('/article-comments', newComment)
  return comment
}

export const deleteById = (commentId) => {
  return api.delete(`/article-comments/${commentId}`)
}

export const updateRatingById = ({ commentId, incVal }) => {
  return api.patch(`/article-comments/${commentId}/vote_count`, { incVal })
}
