import { Route, Routes } from 'react-router-dom'
import { PATHS } from './constants/path-constants.js'
import { ArticleDetailPage, ArticlesPage } from './pages'
import { Link } from './components'

const App = () => {
  return (
    <>
      <Link to={PATHS.ARTICLES} variant="h2" children="NC News" />
      <Routes>
        <Route path={PATHS.HOME} element={<ArticlesPage />} />
        <Route path={PATHS.ARTICLES} element={<ArticlesPage />} />
        <Route path={PATHS.ARTICLE_DETAIL} element={<ArticleDetailPage />} />
      </Routes>
    </>
  )
}

export default App
