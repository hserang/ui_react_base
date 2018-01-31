import React from 'react'
import { shallow } from 'enzyme'
import AsyncLoading from '../AsyncLoading'

describe('AsyncLoading', () => {
  it('renders correctly for timedOut', () => {
    let props = { isLoading: true, timedOut: true }
    let wrapper = shallow(<AsyncLoading {...props} />)
    const msg = <div>Loading component took longer than expected</div>
    expect(wrapper).toContainReact(msg)
  })

  it('renders correctly for pastDelay', () => {
    let props = { isLoading: true, pastDelay: true }
    let wrapper = shallow(<AsyncLoading {...props} />)
    const msg = <div>Component is loading</div>
    expect(wrapper).toContainReact(msg)
  })

  it('renders correctly for fast loads', () => {
    let props = { isLoading: true }
    let wrapper = shallow(<AsyncLoading {...props} />)
    expect(wrapper.equals(null)).toBe(true)
  })

  it('renders correctly for error', () => {
    let props = { error: true }
    let wrapper = shallow(<AsyncLoading {...props} />)
    let msg = <div>Failed to load Component</div>
    expect(wrapper).toContainReact(msg)
  })

  it('renders correctly if no props send', () => {
    let wrapper = shallow(<AsyncLoading />)
    expect(wrapper.equals(null)).toBe(true)
  })
})
