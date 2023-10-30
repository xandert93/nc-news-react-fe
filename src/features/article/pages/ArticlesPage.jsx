import { useQuery } from '@tanstack/react-query'

import { articleApi } from '../api'
import { ArticlePreviewList } from '../components/ArticlePreviewList.jsx'

import { Main } from '../../../components'

export const ArticlesPage = () => {
  const {
    error, // new in v5
    data: articles, // `data` initialised with undefined (not [])
  } = useQuery({
    queryKey: ['articles'],
    queryFn: () => articleApi.get(),
  })

  if (error) {
  }

  return (
    <Main maxWidth={1280}>{articles && <ArticlePreviewList articles={articles} />}</Main>
  )
}
