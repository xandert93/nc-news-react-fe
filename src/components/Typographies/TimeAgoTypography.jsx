import { Typography } from '@mui/material'
import { genRelativeDateStr } from '../../utils/date-formatters'

export const TimeAgoTypography = ({ children, ...props }) => {
  const timeAgo = genRelativeDateStr(children)

  return <Typography component="time" children={timeAgo} {...props} />
}
