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

  const { data = [] } = useQuery({
    queryKey: ['articles', topic_name],
    queryFn: () => articleApi.getMany({ topic: topic_name }),
  })

  return (
    <div>
      <Typography component="h1" variant="h4" children={pageTitle} paragraph />
      <ArticlePreviewList articles={data} />
    </div>
  )
}
