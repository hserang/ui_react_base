import React from 'react'
import { shallow } from 'enzyme'
import Contact from './index'

it('renders without crashing', () => {
  shallow(<Contact />)
})

it('renders correct message', () => {
  const wrapper = shallow(<Contact />)
  const msg = <span>This is Contact component</span>
  // Approach #1
  expect(wrapper.contains(msg)).toEqual(true)
  // Approach #2
  expect(wrapper).toContainReact(msg)
})
