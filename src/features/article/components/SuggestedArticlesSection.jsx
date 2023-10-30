import { useQuery } from '@tanstack/react-query'
import { articleApi } from '../api'
import { ArticlePreviewList } from './ArticlePreviewList'
import { Typography } from '@mui/material'
import { Loader } from '../../../components'

export const SuggestedArticlesSection = ({ title, params }) => {
  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ['articles', 'suggested', params],
    queryFn: () => articleApi.getSuggested(params),
  })

  if (isLoading) return <Loader children={`Loading Suggested Articles`} />

  return (
    <div>
      <Typography component="h2" variant="h5" children={title} />
      <ArticlePreviewList articles={articles} />
    </div>
  )
}
