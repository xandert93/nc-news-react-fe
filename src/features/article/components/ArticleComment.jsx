import { Typography } from '@mui/material'
import { TimeAgoTypography } from '../../../components'

export const ArticleComment = ({ id, author, body, vote_count, created_at }) => {
  return (
    <li>
      <article>
        <img src={author.avatar_url} height="20px" />
        <Typography children={author.username} />
        <Typography children={body} />
        <TimeAgoTypography children={created_at} />
      </article>
    </li>
  )
}
