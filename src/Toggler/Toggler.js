import { Component } from 'react'

class Toggler extends Component {
  state = {
    value: !!this.props.initial || false
  }

  toggle = () => this.setState({ value: !this.state.value })
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
      return render(innerProps)
    }

    if (typeof children === 'function') {
      return children(innerProps)
    }

    return null
  }
}

export default Toggler
