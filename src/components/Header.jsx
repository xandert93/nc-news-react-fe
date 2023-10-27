import { PATHS } from '../constants'
import { useAuthUser } from '../useAuthUser'
import { Link } from './Links'

export const Header = () => {
  const { user } = useAuthUser()

  return (
    <header>
      <Link to={PATHS.ARTICLES} variant="h2" children="NC News" />
      <p>Logged in as: {user?.username}</p>
    </header>
  )
}
