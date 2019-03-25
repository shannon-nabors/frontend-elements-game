import React from 'react';
import {Card} from 'semantic-ui-react'
import Question from '../components/Question'
import Answer from '../components/Answer'
import NextButton from '../components/NextButton'
import ScorePanel from '../components/ScorePanel'
import QuestionSelector from '../components/QuestionSelector'

class SideDisplay extends React.Component {

  render() {
    return (
      <Card id="side-display">
        {this.props.mode === "Quiz" && this.props.elements.length === 0 && <QuestionSelector />}
        <div className="ui header">
          {this.props.mode !== "Learn" && this.props.elements.length > 0 &&
            <Question
              question={this.props.question}/>
          }
        </div>
        <div className="ui description">
          {this.props.mode !== "Learn" && this.props.currentElement && <Answer
                   answer={this.props.question}
                   selection={this.props.currentElement}
                   currentScore={this.props.currentScore}
                />}
          {this.props.mode !== "Learn" && this.props.currentElement && <NextButton
            handleClick={this.props.cycleQuestions} elements={this.props.elements}/>}

        </div>
      </Card>
    );
  }
}

export default SideDisplay;
