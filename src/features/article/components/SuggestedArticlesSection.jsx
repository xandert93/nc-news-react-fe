import { useQuery } from '@tanstack/react-query'
import { articleApi } from '../api'
import { ArticlePreviewList } from './ArticlePreviewList'
import { Typography } from '@mui/material'
import { capitaliseFirstLetter } from '../../../utils/string-formatters'

export const SuggestedArticlesSection = ({ topic }) => {
  const { data = [] } = useQuery({
    queryKey: ['articles'],
    queryFn: () => articleApi.getMany({ topic }),
  })

  return (
    <section>
      <Typography
        variant="h5"
        component="h2"
        children={`More on ${capitaliseFirstLetter(topic)}:`}
      />
      <ArticlePreviewList articles={data.slice(0, 4)} />
    </section>
  )
}
