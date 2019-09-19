import compose from 'ramda/src/compose'
import map from 'ramda/src/map'
import join from 'ramda/src/join'
import split from 'ramda/src/split'

export const capitalize = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`
export const dekebab = string => string.replace(/-/g, ' ')
export const capitalizeEach = compose(
  join(' '),
  map(capitalize),
  split(' ')
)
