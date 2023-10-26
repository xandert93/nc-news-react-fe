import { Typography } from '@mui/material'
import { ArticleCommentForm } from './ArticleCommentForm'
import { ArticleCommentList } from './ArticleCommentList'

export const ArticleCommentSection = () => {
  return (
    <section>
      <Typography variant="h5" component="h2" children="Comments" />
      <ArticleCommentForm />
      <ArticleCommentList />
    </section>
  )
}
