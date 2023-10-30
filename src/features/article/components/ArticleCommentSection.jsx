import { Typography } from '@mui/material'
import { ArticleCommentForm } from './ArticleCommentForm'
import { ArticleCommentList } from './ArticleCommentList'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { articleCommentApi } from '../api'
import { useParams } from 'react-router-dom'

export const ArticleCommentSection = () => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const {
    isPending,
    mutateAsync,
    variables: postedComment,
  } = useMutation({
    mutationFn: articleCommentApi.create,
    onSuccess: (savedComment) => {
      const user = queryClient.getQueryData(['auth-user'])

      queryClient.setQueryData(['article-comments', Number(id)], (comments) => {
        savedComment.author = user // ⚠️ should ideally be done on the server, but impossible without auth yet

        return [savedComment, ...comments]
      })

      // Instead, I could also invalidate the article-comments for this article_id's cache, but this leads to negative UX
      // This is because, once the comment is posted, isPending => false, violently popping the optimistic <PendingComment> from the UI
      // In the meantime, the article-comments fetch is now taking place...the client could be waiting a few seconds before the new comments arrive, causing the desired re-render
      // As a result, once the server responds with 201, I've decided to manually update the cache with that data, allowing the <PendingComment> to be instantly swapped for the real <Comment>
    },
  })

  return (
    <section>
      <Typography variant="h5" component="h2" children="Comments" />
      <ArticleCommentForm isPending={isPending} mutateAsync={mutateAsync} />
      <ArticleCommentList isPending={isPending} postedComment={postedComment} />
    </section>
  )
}
