import test from 'ava'
import * as nav from '../navigation.helpers'

const pages = [
  {
    path: '/blog'
  },
  {
    path: '/'
  },
  {
    path: '/resume'
  },
  {
    path: '/blog/test-post'
  },
  {
    path: '/404'
  }
]

test('getPathText helper', assert => {
  assert.deepEqual(nav.getPathText(pages[0]), ['blog'])
  assert.deepEqual(nav.getPathText(pages[3]), ['blog', 'test-post'])
})

test('assocPathName helper', assert => {
  assert.deepEqual(
    nav.assocPathName({ path: '/bar' }),
    { path: '/bar', text: 'bar' }
  )
})

test('makeNavData helper', assert => {
  const expected = [{ path: '/blog', text: 'blog' }, { path: '/resume', text: 'resume' }]
  assert.deepEqual(nav.makeNavData(pages), expected)
})
