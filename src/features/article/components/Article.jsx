import { Typography } from '@mui/material'
import { TimeAgoTypography } from '../../../components'
import { splitIntoSentences } from '../../../utils/string-formatters'

export const Article = ({
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
    <article>
      <Typography variant="h3" component="h1" children={title} />
      <Typography variant="h5" component="h2" children={author.username} />
      <img src={author.avatar_url} height="40px" />
      <TimeAgoTypography children={created_at} />
      <img src={image_url} width="100%" />
      <ArticleBody body={body} />
    </article>
  )
}

const ArticleBody = ({ body }) => {
  const sentences = splitIntoSentences(body)

  return (
    <div>
      {sentences.map((sentence, i) => (
        <Typography key={i} children={sentence} paragraph />
      ))}
    </div>
  )
}
