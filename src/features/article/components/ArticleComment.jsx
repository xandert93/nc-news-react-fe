import { ArticleCommentDeleteButton } from './ArticleCommentDeleteButton'
import { Typography } from '@mui/material'
import { TimeAgoTypography } from '../../../components'

import { useAuthUser } from '../../../useAuthUser'

export const ArticleComment = ({ id, author, body, vote_count, created_at }) => {
  const { user } = useAuthUser()

  const isUsers = user?.username === author.username

  return (
    <li>
      <article>
        <img src={author.avatar_url} height="20px" />
        <Typography children={author.username} />
        <Typography children={body} />
        <TimeAgoTypography children={created_at} />
        {isUsers && <ArticleCommentDeleteButton id={id} />}
      </article>
    </li>
  )
}
