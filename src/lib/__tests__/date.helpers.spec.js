import test from 'ava'
import * as date from '../date.helpers'

test('fullDate helper', assert => {
  assert.is(date.fullDate('2018-09'), 'september 2018')
})
