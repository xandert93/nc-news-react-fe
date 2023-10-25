import { Link as MuiLink } from '@mui/material'
import { Link as RouteLink } from 'react-router-dom'

export const Link = (props) => {
  return <MuiLink component={RouteLink} {...props} />
}
