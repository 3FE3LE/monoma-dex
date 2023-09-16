export function getFormattedDate() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = new Date()
  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  let daySuffix = 'th'

  if (day === 1 || day === 21 || day === 31) {
    daySuffix = 'st'
  } else if (day === 2 || day === 22) {
    daySuffix = 'nd'
  } else if (day === 3 || day === 23) {
    daySuffix = 'rd'
  }

  return `${month} ${day}${daySuffix} ${year}`
}
