import { useQuery } from '@tanstack/react-query'

import { useParams } from 'react-router-dom'
import { articleApi } from '../api'

import { Article, ArticleCommentSection, SuggestedArticlesSection } from '../components'
import { Loader } from '../../../components'

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

  if (isLoading) return <Loader children="Loading Article" />
  else if (error) return error.message
  else
    return (
      <div>
        <Article {...article} />
        <SuggestedArticlesSection
          title={`More from ${article.author.username}:`}
          params={{
            username: article.author.username,
            exclude: article.id,
          }}
        />
        <SuggestedArticlesSection
          title={`More on ${article.topic}:`}
          params={{
            topic: article.topic,
            exclude: article.id,
          }}
        />
        <ArticleCommentSection />
      </div>
    )
}
