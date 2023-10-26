import { Grid, Typography } from '@mui/material'
import { ArticleRating } from './ArticleRating'
import { TimeAgoTypography } from '../../../components'
import { getSentences } from '../../../utils/string-formatters'

import { useSetDocumentTitle } from '../../../hooks'

export const Article = (article) => {
  const {
    id,
    title,
    author,
    topic,
    body,
    image_url,
    vote_count,
    comment_count,
    created_at,
  } = article

  useSetDocumentTitle(article.title)

  return (
    <article>
      <Typography variant="h3" component="h1" children={title} />
      <Typography variant="h5" component="h2" children={author.username} />
      <img src={author.avatar_url} height="40px" />
      <TimeAgoTypography children={created_at} />
      <img src={image_url} width="100%" />
      <ArticleBody body={body} />
      <ArticleRating id={id} vote_count={vote_count} />
    </article>
  )
}

const ArticleBody = ({ body }) => {
  const sentences = getSentences(body)

  return (
    <Grid container flexDirection="column" rowGap={1.5}>
      {sentences.map((sentence, i) => (
        <Typography key={i} children={sentence} />
      ))}
    </Grid>
  )
}
