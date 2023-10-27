import { useQuery } from '@tanstack/react-query'

import { useParams } from 'react-router-dom'
import { articleApi } from '../features/article/api'

import {
  Article,
  ArticleCommentSection,
  SuggestedArticlesSection,
} from '../features/article/components'

export const ArticleDetailPage = () => {
  const { id } = useParams()

  const {
    isLoading,
    data: article,
    error,
  } = useQuery({
    queryKey: ['articles', Number(id)],
    queryFn: () => articleApi.getById(id),
  })

  if (isLoading) return 'Loading...'
  else if (error) return error.message
  else
    return (
      <div>
        <Article {...article} />
        <SuggestedArticlesSection topic={article.topic} />
        <ArticleCommentSection />
      </div>
    )
}
