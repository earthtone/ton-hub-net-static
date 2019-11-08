import months from '../data/months.data.json'
const getFullMonth = date => months[date.getMonth()]
const getFullYear = date => date.getFullYear()

export const fullDate = string => {
  const date = new Date(string)
  return !string ? 'present' : `${getFullMonth(date)} ${getFullYear(date)}`
}
