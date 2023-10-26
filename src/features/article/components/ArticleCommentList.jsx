import { useParams } from 'react-router-dom'
import { articleApi } from '../api'
import { ArticleComment } from './ArticleComment'
import { useQuery } from '@tanstack/react-query'

export const ArticleCommentList = () => {
  const { id } = useParams()

  const { data = [] } = useQuery({
    queryKey: ['article-comments', Number(id)],
    queryFn: () => articleApi.getCommentsByArticleId(id),
  })

  return (
    <ol>
      {data.map((comment) => (
        <ArticleComment key={comment.id} {...comment} />
      ))}
    </ol>
  )
}
