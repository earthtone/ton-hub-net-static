import test from 'ava'
import * as text from '../text.helpers'

test('capitalize helper', assert => {
  assert.is(text.capitalize('foo'), 'Foo')
})

test('dekebab helper', assert => {
  assert.is(text.dekebab('foo-bar'), 'foo bar')
})

test('capitalizeEach helper', assert => {
  assert.is(text.capitalizeEach('foo bar baz'), 'Foo Bar Baz')
})
