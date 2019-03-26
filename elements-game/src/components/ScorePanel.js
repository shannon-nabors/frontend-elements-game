import React, { Fragment } from 'react'
import { Button } from 'semantic-ui-react'

class ScorePanel extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          Game over!
        </div>
        <p>Your score:</p>
        <p>{this.props.currentScore()}</p>
        <p>{this.props.percent()}</p>
        <Button onClick={this.props.resetQuiz}>Play Again</Button>
      </Fragment>
    )
  }
}

export default ScorePanel
