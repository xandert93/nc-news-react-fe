import { format, formatDistanceToNowStrict } from 'date-fns'

export const genRelativeDateStr = (dateStr) => {
  const date = new Date(dateStr)

  const relativeDateStr = formatDistanceToNowStrict(date, { addSuffix: true })

  if (relativeDateStr === '0 seconds ago') return 'Just now'
  else return relativeDateStr
}

export const genAgeStr = (date) => `${formatDistanceToNowStrict(date)} old`

export const genDateAndTimeStr = (date) => format(date, 'PPPp')
