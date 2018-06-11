import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import Stater from './Stater'

import { testRenderProps } from '../utils/testing'

testRenderProps(Stater)

test('have initial prop', t => {
  const wrapper = shallow(
    <Stater initial={42}>{props => <div {...props} />}</Stater>
  )

  t.is(wrapper.props().value, 42)
})

test('setting new value', t => {
  const wrapper = shallow(
    <Stater initial={41}>
      {props => <button onClick={() => props.set(42)}>{props.value}</button>}
    </Stater>
  )

  wrapper.find('button').simulate('click')
  t.truthy(wrapper.children().contains(42))
})

test('shold work with object', t => {
  const wrapper = shallow(
    <Stater initial={{ answer: 42 }}>
      {props => (
        <div>
          <button onClick={() => props.set({ question: '?' })}>click</button>
          <span {...props} />
        </div>
      )}
    </Stater>
  )

  wrapper.find('button').simulate('click')
  t.deepEqual(wrapper.find('span').props().value, { answer: 42, question: '?' })
})
