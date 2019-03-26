import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from './NavBar'
import Table from './Table'
import SideDisplay from './SideDisplay'
import ElementDetails from '../components/ElementDetails'

class QuizPage extends Component {

  render() {

    if (!this.props.loggedIn) {
      return <Redirect to="/"/>
    }

    return (
      <div className="ui grid">

        <div className="ui row">
          <div className="ui twelve wide column">
            <NavBar
              gameSel={this.props.gameSel}
              handleGameSel={this.props.handleGameSel}
              handleNavSel={this.props.handleNavSel}
              user={this.props.user}
              logout={this.props.logout}
            />
          </div>
        </div>

        <div className="ui twelve wide column background">
          <Table
            elements={this.props.formatElementsForTable()}
            handleClick={this.props.handleElementClick}
          />
          {this.props.element && this.props.gameSel === "Learn" ? (
            <ElementDetails
              element={this.props.element}
              exit={this.props.handleModalExit}
            />
          ) : null}
        </div>
        <div className="ui four wide column">
          <SideDisplay
            elements={this.props.questions}
            cycleQuestions={this.props.cycleQuestions}
            question={this.props.question}
            mode={this.props.gameSel}
            currentElement={this.props.element}
            setElement={this.props.setSelectedElement}
            currentScore={this.props.displayCurrentScore}
            percent={this.props.displayPercent}
          />
        </div>
      </div>
    )
  }
}

export default QuizPage
