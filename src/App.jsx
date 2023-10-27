import { Route, Routes } from 'react-router-dom'
import { PATHS } from './constants'
import { ArticleDetailPage, ArticlesByTopicPage, ArticlesPage } from './pages'

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
      </Routes>
    </>
  )
}

export default App
