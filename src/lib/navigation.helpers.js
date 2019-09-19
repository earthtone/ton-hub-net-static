import compose from 'ramda/src/compose'
import converge from 'ramda/src/converge'
import map from 'ramda/src/map'
import split from 'ramda/src/split'
import prop from 'ramda/src/prop'
import filter from 'ramda/src/filter'
import reject from 'ramda/src/reject'
import isEmpty from 'ramda/src/isEmpty'
import assoc from 'ramda/src/assoc'
import head from 'ramda/src/head'
import identity from 'ramda/src/identity'
import length from 'ramda/src/length'
import equals from 'ramda/src/equals'
import isNil from 'ramda/src/isNil'

export const getPathText = compose(
  reject(isEmpty),
  split('/'),
  prop('path')
)

export const assocPathName = converge(
  assoc('text'),
  [compose(head, getPathText), identity]
)

const isBasePath = compose(isNil, prop('text'))
const isErrPath = compose(equals('404'), prop('text'))
const isNavPath = compose(equals(1), length, getPathText)

export const makeNavData = compose(
  filter(isNavPath),
  reject(isErrPath),
  reject(isBasePath),
  map(assocPathName)
)
