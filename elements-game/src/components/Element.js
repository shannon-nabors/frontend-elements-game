import React, { Component } from 'react'

class Element extends Component {
  render() {
    let { number, symbol } = this.props.element

    return (
      <div
        id={number < 120 ? "element" : "blank"}
        onClick={number < 120 ? this.props.handleClick : null}
      >
        {number < 120 ? symbol : null}
      </div>
    )
  }
}

export default Element
