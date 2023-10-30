import { useParams } from 'react-router-dom'
import { articleApi } from '../api'
import { ArticleComment } from './ArticleComment'
import { useQuery } from '@tanstack/react-query'
import { Loader } from '../../../components'
import { PendingArticleComment } from './PendingArticleComment'

export const ArticleCommentList = ({ isPending, postedComment }) => {
  const { id } = useParams()

  const { isLoading, data: comments } = useQuery({
    queryKey: ['article-comments', Number(id)],
    queryFn: () => articleApi.getComments(id),
  })

  if (isLoading) return <Loader children="Loading comments" />

  return (
    <div>
      {isPending && <PendingArticleComment comment={postedComment} />}
      {comments.map((comment) => (
        <ArticleComment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
