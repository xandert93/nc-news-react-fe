import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { TimeAgoTypography } from '../../../components'

export const ArticlePreview = ({
  id,
  title,
  author,
  topic,
  body,
  image_url,
  vote_count,
  comment_count,
  created_at,
}) => {
  return (
    <Card elevation={8}>
      <CardMedia component="img" height={250} image={image_url} />
      <CardHeader title={title} />
      <CardContent>
        <TimeAgoTypography children={created_at} />
      </CardContent>
    </Card>
  )
}
