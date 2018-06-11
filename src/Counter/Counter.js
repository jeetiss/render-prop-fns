import { Component } from 'react'

class Counter extends Component {
  state = {
    value: this.props.initial || 0
  }

  max = this.props.max || Infinity
  min = this.props.min || 0

  set = value =>
    this.setState({
      value: value > this.max ? this.min : value < this.min ? this.max : value
    })

  inc = () => this.set(this.state.value + 1)
  dec = () => this.set(this.state.value - 1)

  render () {
    const { children, render } = this.props
    const innerProps = {
      value: this.state.value,
      inc: this.inc,
      dec: this.dec,
      set: this.set
    }

    if (typeof render === 'function') {
      return render(innerProps)
    }

    if (typeof children === 'function') {
      return children(innerProps)
    }

    return null
  }
}

export default Counter
