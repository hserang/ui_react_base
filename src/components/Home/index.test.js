import React from 'react'
import { shallow } from 'enzyme'
import Home from './index'

it('renders without crashing', () => {
  shallow(<Home />)
})

it('renders correct message', () => {
  const wrapper = shallow(<Home />)
  const msg = <span>This is Home component</span>
  expect(wrapper).toContainReact(msg)
})
