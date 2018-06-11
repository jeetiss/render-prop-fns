import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import Counter from './Counter'

import { testRenderProps } from '../utils/testing'

testRenderProps(Counter)

test('inc should work', t => {
  const wrapper = shallow(
    <Counter max={42} initial={41}>
      {({ value, inc }) => (
        <div>
          <button onClick={inc} id='inc'>
            inc
          </button>

          <span value={value} />
        </div>
      )}
    </Counter>
  )

  wrapper.find('button#inc').simulate('click')
  t.is(wrapper.find('span').props().value, 0)
})

test('max prop should work with inc', t => {
  const wrapper = shallow(
    <Counter initial={41}>
      {({ value, inc }) => (
        <div>
          <button onClick={inc} id='inc'>
            inc
          </button>

          <span value={value} />
        </div>
      )}
    </Counter>
  )

  wrapper.find('button#inc').simulate('click')
  t.is(wrapper.find('span').props().value, 42)
})

test('dec should work', t => {
  const wrapper = shallow(
    <Counter initial={43}>
      {({ value, dec }) => (
        <div>
          <button onClick={dec} id='dec'>
            dec
          </button>

          <span value={value} />
        </div>
      )}
    </Counter>
  )

  wrapper.find('button#dec').simulate('click')
  t.is(wrapper.find('span').props().value, 42)
})

test('set should work', t => {
  const wrapper = shallow(
    <Counter>
      {({ value, set }) => (
        <div>
          <button onClick={() => set(42)} id='set'>
            set
          </button>

          <span value={value} />
        </div>
      )}
    </Counter>
  )

  wrapper.find('button#set').simulate('click')
  t.is(wrapper.find('span').props().value, 42)
})

test('max prop should work with set', t => {
  const wrapper = shallow(
    <Counter max={42} initial={41}>
      {({ value, set }) => (
        <div>
          <button onClick={() => set(42)} id='set'>
            set
          </button>

          <span value={value} />
        </div>
      )}
    </Counter>
  )

  wrapper.find('button#set').simulate('click')
  t.is(wrapper.find('span').props().value, 0)
})
