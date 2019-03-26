import React, { Fragment } from 'react'
import { Button } from 'semantic-ui-react'

class ScorePanel extends React.Component {
  render() {
    return (
      <div id="score-panel">
        <p>Game over!</p>
        <p>Your score:</p>
        <p>{this.props.currentScore()} ({this.props.percent()})</p>
        <br></br>
        <Button onClick={this.props.resetQuiz} id="next-button">Play Again</Button>
      </div>
    )
  }
}

export default ScorePanel
