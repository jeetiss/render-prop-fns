import { Component } from 'react'

class Stater extends Component {
  state = {
    value: this.initial || null
  }

  set = value => this.setState({ value })

  render () {
    const { children, render } = this.props
    const innerProps = {
      value: this.state.value,
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

export default Stater
