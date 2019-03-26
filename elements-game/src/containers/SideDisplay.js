import React from 'react';
import { Card } from 'semantic-ui-react'
import Question from '../components/Question'
import Answer from '../components/Answer'
import NextButton from '../components/NextButton'
import ScorePanel from '../components/ScorePanel'

class SideDisplay extends React.Component {

  render() {
    return (
      <Card id="side-display">

      <div id="activity-header">Activity Window</div>
        <div className="ui header">
          {this.props.mode !== "Learn" && this.props.elements.length > 0 &&
            <Question
              question={this.props.question} />
          }
        </div>
        <div className="ui description">

          {this.props.mode !== "Learn" && this.props.currentElement && <Answer
            answer={this.props.question}
            selection={this.props.currentElement}
            currentScore={this.props.currentScore}
          />}

          {this.props.mode !== "Learn" && this.props.elements.length === 0 && <ScorePanel currentScore={this.props.currentScore} percent={this.props.percent} resetQuiz={this.props.resetQuiz}/>}

          {this.props.mode !== "Learn" && this.props.currentElement && <NextButton
            handleClick={this.props.cycleQuestions} remaining={this.props.elements.length} update={this.props.update}/>}

        </div>
      </Card>
    );
  }
}

export default SideDisplay;
