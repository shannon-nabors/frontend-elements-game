import React from 'react'
import ReactDOM from 'react-dom'

class ElementDetails extends React.Component {

  handleExitClick(e) {
    let modal = document.querySelector('#element-details')
    if (e.target != modal && ![...modal.querySelectorAll('*')].includes(e.target)) {
      this.props.exit()
    }
  }

  render() {
    let { number, symbol, atomic_mass, boil, category, discovered_by, melt, name, period, summary, spectral_img } = this.props.element

    return ReactDOM.createPortal(
      <div
        className="ui dimmer modals page transition visible active"
        onClick={(e) => this.handleExitClick(e)}>
        <div
          className="ui standard test modal transition visible active"
          id="element-details">

          <i className="close icon"></i>

          <div className="header">
            {name} ({symbol})
          </div>

          <div className="description">
            <p>Atomic number: {number}</p>
            <p>Atomic mass: {atomic_mass}</p>
            <p>{boil ? `Boiling point: ${boil}` : null}</p>
            <p>{melt ? `Melting point: ${melt}` : null}</p>
            <p>{summary}</p>
          </div>

        </div>
      </div>,
      document.body
    )
  }
}

export default ElementDetails
