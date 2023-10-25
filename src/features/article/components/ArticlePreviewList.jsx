import { ArticlePreview } from './ArticlePreview.jsx'

import { Link } from '../../../components/Links/Link.jsx'

import { PATHS } from '../../../constants'
import { Grid } from '@mui/material'

export const ArticlePreviewList = ({ articles }) => {
  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
      {articles.map((article) => (
        <Grid item key={article.id} xs={12} sm={6} md={4}>
          <Link variant="body1" to={`${PATHS.ARTICLES}/${article.id}`}>
            <ArticlePreview {...article} />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
