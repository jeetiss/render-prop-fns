import { Componet } from 'react'

class Counter extends Componet {
  state = {
    value: this.props.initial || 0
  }

  max = this.props.max

  set = value =>
    this.max
      ? this.setState({ value: value % this.max })
      : this.setState({ value })

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
