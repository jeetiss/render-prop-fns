import { Component } from 'react'

class Stater extends Component {
  state = {
    value: this.props.initial || null
  }

  set = value => {
    if (!Array.isArray(this.state.value) && typeof this.state.value === 'object') {
      this.setState({ value: Object.assign({}, this.state.value, value) })
    } else {
      this.setState({ value })
    }
  }

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
