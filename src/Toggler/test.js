import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import Toggler from './Toggler'

import { testRenderProps } from '../utils/testing'

testRenderProps(Toggler)

test('off should work', t => {
  const wrapper = shallow(
    <Toggler initial>
      {({ value, off }) => (
        <div>
          <button onClick={off} id='off'>
            off
          </button>

          <span value={value} />
        </div>
      )}
    </Toggler>
  )

  t.truthy(wrapper.find('span').props().value)
  wrapper.find('button#off').simulate('click')
  t.false(wrapper.find('span').props().value)
})

test('on should work', t => {
  const wrapper = shallow(
    <Toggler>
      {({ value, on }) => (
        <div>
          <button onClick={on} id='on'>
            on
          </button>

          <span value={value} />
        </div>
      )}
    </Toggler>
  )

  t.false(wrapper.find('span').props().value)
  wrapper.find('button#on').simulate('click')
  t.truthy(wrapper.find('span').props().value)
})

test('toggle should work', t => {
  const wrapper = shallow(
    <Toggler>
      {({ value, toggle }) => (
        <div>
          <button onClick={toggle} id='toggle'>
            toggle
          </button>

          <span value={value} />
        </div>
      )}
    </Toggler>
  )

  t.false(wrapper.find('span').props().value)
  wrapper.find('button#toggle').simulate('click')
  t.truthy(wrapper.find('span').props().value)
  wrapper.find('button#toggle').simulate('click')
  t.false(wrapper.find('span').props().value)
})
