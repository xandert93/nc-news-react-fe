import { useQuery } from '@tanstack/react-query'
import { articleTopicApi } from '../api'
import { capitaliseFirstLetter } from '../../../utils/string-formatters'

import { PATHS } from '../../../constants'
import { Grid } from '@mui/material'
import { Link } from '../../../components'

export const ArticleTopicLinks = () => {
  const { data } = useQuery({
    queryKey: ['topics'],
    queryFn: articleTopicApi.getMany,
  })

  return (
    <Grid container columnGap={2}>
      {data?.map((topic) => (
        <Link
          key={topic.name}
          to={'/articles/topic/' + topic.name}
          variant="body1"
          children={capitaliseFirstLetter(topic.name)}
        />
      ))}

      {data && <Link to={PATHS.TOPICS} variant="caption" children="More..." />}
    </Grid>
  )
}
