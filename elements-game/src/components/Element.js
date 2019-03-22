import React, { Component } from 'react'

class Element extends Component {
  render() {
    let { number, symbol } = this.props.element

    return (
      <div id={number < 120 ? "element" : "blank"}>
        {number < 120 ? symbol : null}
      </div>
    )
  }
}

export default Element
