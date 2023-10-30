import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { articleApi } from '../api'

import { capitaliseFirstLetter } from '../../../utils/string-formatters.js'
import { ArticlePreviewList } from '../components'
import { Typography } from '@mui/material'
import { useSetDocumentTitle } from '../../../hooks'
import { Loader } from '../../../components'

export const ArticlesByTopicPage = () => {
  const { topic } = useParams()

  const capitalisedTopic = capitaliseFirstLetter(topic)

  useSetDocumentTitle(capitalisedTopic)

  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ['articles', topic],
    queryFn: () => articleApi.get({ topic }),
  })

  if (isLoading) return <Loader>Loading {capitalisedTopic} Articles</Loader>
  else if (error) return error.message
  else if (!articles.length) return "That topic doesn't exist" // JFN
  else
    return (
      <div>
        <Typography component="h1" variant="h4" children={capitalisedTopic} paragraph />
        <ArticlePreviewList articles={articles} />
      </div>
    )
}
