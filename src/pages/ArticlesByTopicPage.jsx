import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { articleApi } from '../features/article/api'

import { capitaliseFirstLetter } from '../utils/string-formatters.js'
import { ArticlePreviewList } from '../features/article/components/ArticlePreviewList'
import { Typography } from '@mui/material'
import { useSetDocumentTitle } from '../hooks'

export const ArticlesByTopicPage = () => {
  const { topic_name } = useParams()

  const pageTitle = capitaliseFirstLetter(topic_name) + ' Articles'
  useSetDocumentTitle(pageTitle)

  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ['articles', topic_name],
    queryFn: () => articleApi.getMany({ topic: topic_name }),
  })

  if (isLoading) return 'Loading'
  else if (error) return error.message
  else if (!articles.length) return "That topic doesn't exist" // JFN
  else
    return (
      <div>
        <Typography component="h1" variant="h4" children={pageTitle} paragraph />
        <ArticlePreviewList articles={articles} />
      </div>
    )
}
