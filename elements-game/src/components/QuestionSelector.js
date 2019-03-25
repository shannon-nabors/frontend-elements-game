import React, { Component } from 'react'

class QuestionSelector extends Component {
  render() {
    return(
      <div class="ui buttons" id="quiz-selectors">
        <button class="ui button" id="quiz-selector">Name</button>
        <div class="or"></div>
        <button class="ui button" id="quiz-selector">Symbol</button>
      </div>
    )
  }
}

export default QuestionSelector
