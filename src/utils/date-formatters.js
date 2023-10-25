import { format, formatDistanceToNowStrict } from 'date-fns'

export const genRelativeDateStr = (children) => {
  const date = new Date(children)

  return formatDistanceToNowStrict(date, { addSuffix: true })
}

export const genAgeStr = (date) => `${formatDistanceToNowStrict(date)} old`

export const genDateAndTimeStr = (date) => format(date, 'PPPp')
