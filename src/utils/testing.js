import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import sinon from 'sinon'

const testRenderProps = Component => {
  test('renders via children', t => {
    const renderer = sinon.spy(() => <div>42</div>)

    const wrapper = shallow(<Component>{renderer}</Component>)
    t.truthy(wrapper.contains(<div>42</div>))
    t.truthy(renderer.calledOnce)
  })

  test('renders via render', t => {
    const renderer = sinon.spy(() => <div>42</div>)

    const wrapper = shallow(<Component render={renderer} />)
    t.truthy(wrapper.contains(<div>42</div>))
    t.truthy(renderer.calledOnce)
  })

  test('return null if no props', t => {
    const wrapper = shallow(<Component />)
    t.false(wrapper.children().exists())
  })
}

export { testRenderProps }
