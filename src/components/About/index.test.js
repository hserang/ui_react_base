import React from 'react'
import { shallow } from 'enzyme'
import About from './index'

it('renders without crashing', () => {
  shallow(<About />)
})

it('renders correct message', () => {
  const wrapper = shallow(<About />)
  const msg = <span>This is About component</span>
  // Approach #1
  expect(wrapper.contains(msg)).toEqual(true)
  // Approach #2
  expect(wrapper).toContainReact(msg)
})
