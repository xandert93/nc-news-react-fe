import { Link, useLocation } from 'react-router-dom'
import { PATHS } from '../constants/path-constants'
import { useSetDocumentTitle } from '../hooks'

export const NotFoundPage = () => {
  useSetDocumentTitle('Not Found')

  const location = useLocation()

  const message = location.state?.message || 'No message from navigated page'

  return (
    <>
      <h1>Sorry, this page isn't available</h1>
      <h2>{message}</h2>
      <p>The link you followed may be broken, or the page may have been removed.</p>
      <Link to={PATHS.HOME} children="Go back to Home!" />
    </>
  )
}
