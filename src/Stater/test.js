import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import Stater from './Stater'

test('Stater', t => {
  const wrapper = shallow(
    <Stater initial={42}>{props => <div {...props} />}</Stater>
  )

  t.is(wrapper.props().value, 42, 'should pass initial value')
})
