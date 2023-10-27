import { Route, Routes } from 'react-router-dom'
import { PATHS } from './constants'
import {
  ArticleDetailPage,
  ArticlesByTopicPage,
  ArticlesPage,
  NotFoundPage,
} from './pages'

import { Header, TopNavigation } from './components'

const App = () => {
  return (
    <>
      <Header />
      <TopNavigation />
      <Routes>
        <Route path={PATHS.HOME} element={<ArticlesPage />} />
        <Route path={PATHS.ARTICLES} element={<ArticlesPage />} />
        <Route path={PATHS.ARTICLE_DETAIL} element={<ArticleDetailPage />} />
        <Route path={PATHS.ARTICLES_BY_TOPIC} element={<ArticlesByTopicPage />} />
        <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
