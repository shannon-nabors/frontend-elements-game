import React from 'react';
import Question from '../components/Question'
import Answer from '../components/Answer'
import NextButton from '../components/NextButton'

class SideDisplay extends React.Component {

  render() {
    return (
      <div className="side-display">
          <div>
            {this.props.mode !== "Learn" && this.props.elements.length > 0 &&
              <Question
                question={this.props.question}/>
            }
            {this.props.mode !== "Learn" && this.props.currentElement && <Answer
                     answer={this.props.question}
                     selection={this.props.currentElement}
                     currentScore={this.props.currentScore}
                  />}
            {this.props.mode !== "Learn" && this.props.currentElement && <NextButton
              handleClick={this.props.cycleQuestions}/>}
          </div>
      </div>
    );
  }
}

export default SideDisplay;
