import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
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
      <Fragment>
        <div className="ui container">
            <NavBar
              gameSel={this.props.gameSel}
              handleGameSel={this.props.handleGameSel}
              handleNavSel={this.props.handleNavSel}
              user={this.props.user}
              logout={this.props.logout}
            />
        </div>

          <div className="ui grid">
            <div className="ui row">
              <div className="ui one wide column"></div>
              <div className="ui ten wide column">
                <Table
                  elements={this.props.formatElementsForTable()}
                  handleClick={this.props.handleElementClick}
                />
              </div>
              <div className="ui one wide column"></div>
              <div className="ui three wide column">
                <SideDisplay
                  elements={this.props.questions}
                  cycleQuestions={this.props.cycleQuestions}
                  question={this.props.question}
                  mode={this.props.gameSel}
                  currentElement={this.props.element}
                  setElement={this.props.setSelectedElement}
                  currentScore={this.props.displayCurrentScore}
                  percent={this.props.displayPercent}
                  update={this.props.updateUserScores}
                  resetQuiz={this.props.resetQuiz}
                />
              </div>
            </div>
          </div>

          {this.props.element && this.props.gameSel === "Learn" ? (
            <ElementDetails
              element={this.props.element}
              exit={this.props.handleModalExit}
            />
          ) : null}

      </Fragment>
    )
  }
}

export default QuizPage
