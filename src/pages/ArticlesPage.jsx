import { useQuery } from '@tanstack/react-query'

import { articleApi } from '../features/article/api'
import { ArticlePreviewList } from '../features/article/components/ArticlePreviewList.jsx'

import { Main } from '../components'

export const ArticlesPage = () => {
  const {
    error, // new in v5
    data: articles, // `data` initialised with undefined (not [])
  } = useQuery({
    queryKey: ['articles'],
    queryFn: () => articleApi.getMany(),
  })

  if (error) {
  }

  return (
    <Main maxWidth={1280} margin="0 auto">
      {articles && <ArticlePreviewList articles={articles} />}
    </Main>
  )
}
