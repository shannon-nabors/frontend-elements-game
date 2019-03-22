import React, { Component } from 'react'
import Element from '../components/Element'

class Table extends Component {

  render() {
    return (
      <div id="p-table">
        {this.props.elements.map(e =>
          <Element
            key={e.number}
            element={e}
            
          />)
        }
      </div>
    )
  }
}

export default Table
