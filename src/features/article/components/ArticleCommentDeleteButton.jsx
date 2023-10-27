import { IconButton } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { articleCommentApi } from '../api'

export const ArticleCommentDeleteButton = ({ id }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: articleCommentApi.deleteById,
    onSuccess: () => {
      queryClient.invalidateQueries('article-comments')
    },
  })

  const handleClick = () => mutate(id)

  return <IconButton onClick={handleClick} children="🗑️" />
}
