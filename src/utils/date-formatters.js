import { format, formatDistanceToNowStrict } from 'date-fns'

export const genRelativeDateStr = (dateStr) => {
  const date = new Date(dateStr)

  return formatDistanceToNowStrict(date, { addSuffix: true })
}

export const genAgeStr = (date) => `${formatDistanceToNowStrict(date)} old`

export const genDateAndTimeStr = (date) => format(date, 'PPPp')
