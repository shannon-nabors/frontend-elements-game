import React, { Component } from 'react'

class Element extends Component {

  // formatID() {
  //   return this.props.element.category.split(" ").join("-")
  // }

  render() {
    let { number, symbol, category } = this.props.element

    return (
      <div
        className={number < 120 ? "element" : "blank"}
        id={category}
        onClick={number < 120 ?
                 () => this.props.handleClick(this.props.element)
                 : null}
      >
        {number < 120 ? symbol : null}
      </div>
    )
  }
}

export default Element
