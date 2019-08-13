import test from 'ava'
import { mount } from '@vue/test-utils'
import PostList from '../PostList.vue'

// Tests aren't really necessary for a basic static site
// but since the CI/CD pipeline is being put in I thought
// it would be useful to include at least one test for
// the test script to run and to use as a reference for
// setting up tests for more complex components I may add
// to the site in future

test('renders as expected', assert => {
  const post = {
    title: 'foobarbaz',
    description: 'Amet culpa eveniet exercitationem cumque voluptatibus voluptates Aperiam tempore soluta beatae quis nobis deserunt? Ut ut reprehenderit enim ratione inventore Veniam ut omnis nostrum commodi debitis unde Nesciunt laboriosam atque?',
    date: '2019-08-13',
    timeToRead: '5',
    path: '/foobarbaz'
  }

  const wrapper = mount(PostList, {
    propsData: { post },
    stubs: ['g-link']
  })

  assert.snapshot(wrapper.html())
})
