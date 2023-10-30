import { ArticleCommentRating } from './ArticleCommentRating'
import { ArticleCommentDeleteButton } from './ArticleCommentDeleteButton'
import { Typography } from '@mui/material'
import { TimeAgoTypography } from '../../../components'

import { useAuthUser } from '../../../useAuthUser'

export const ArticleComment = ({ comment, ...props }) => {
  const { id, article_id, author, body, vote_count, created_at } = comment

  const { user } = useAuthUser()

  const isUsers = user?.username === author.username

  return (
    <article {...props}>
      <img src={author.avatar_url} height="20px" />
      <Typography children={author.username} />
      <Typography children={body} />
      <TimeAgoTypography children={created_at} />
      <ArticleCommentRating id={id} vote_count={vote_count} />
      {isUsers && <ArticleCommentDeleteButton id={id} />}
    </article>
  )
}
