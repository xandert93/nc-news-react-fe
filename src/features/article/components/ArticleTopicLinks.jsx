import { useQuery } from '@tanstack/react-query'
import { articleTopicApi } from '../api'
import { capitaliseFirstLetter } from '../../../utils/string-formatters'

import { PATHS } from '../../../constants'
import { Grid } from '@mui/material'
import { Link, Loader } from '../../../components'

export const ArticleTopicLinks = () => {
  const { isLoading, data: topics } = useQuery({
    queryKey: ['topics'],
    queryFn: articleTopicApi.get,
  })

  if (isLoading) return <Loader>Loading Topics...</Loader>

  return (
    <Grid container columnGap={2}>
      {topics.map((topic) => (
        <Link
          key={topic.name}
          to={'/articles/topic/' + topic.name}
          variant="body1"
          children={capitaliseFirstLetter(topic.name)}
        />
      ))}
      <Link to={PATHS.TOPICS} variant="caption" children="More..." />
    </Grid>
  )
}
