import { Component } from 'react'

class Toggler extends Component {
  state = {
    value: !!this.defaultValue || false
  }

  toggle = (value) => this.setState({ value: !value })
  on = () => this.setState({ value: true })
  off = () => this.setState({ value: false })

  render () {
    const { children, render } = this.props

    const innerProps = {
      value: this.state.value,
      on: this.on,
      off: this.off,
      toggle: this.toggle
    }

    if (typeof render === 'function') {
      return children(innerProps)
    }

    if (typeof children === 'function') {
      return render(innerProps)
    }

    return null
  }
}

export default Toggler
