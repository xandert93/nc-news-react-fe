import { Route, Routes } from 'react-router-dom'
import { PATHS } from './constants'
import { ArticleDetailPage, ArticlesByTopicPage, ArticlesPage } from './pages'
import { useQuery } from '@tanstack/react-query'
import { userApi } from './features/user/api'
import { Link } from './components'

import { TopNavigation } from './components'

const App = () => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => userApi.getByUsername('xandert.93'),
  })

  return (
    <>
      <Link to={PATHS.ARTICLES} variant="h2" children="NC News" />
      <TopNavigation />
      <Routes>
        <Route path={PATHS.HOME} element={<ArticlesPage />} />
        <Route path={PATHS.ARTICLES} element={<ArticlesPage />} />
        <Route path={PATHS.ARTICLE_DETAIL} element={<ArticleDetailPage />} />
        <Route path={PATHS.ARTICLES_BY_TOPIC} element={<ArticlesByTopicPage />} />
      </Routes>
    </>
  )
}

export default App
