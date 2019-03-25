import React from 'react';
import Question from '../components/Question'
import Answer from '../components/Answer'
import NextButton from '../components/NextButton'

class SideDisplay extends React.Component {

  render() {
    return (
      <div className="side-display">
          <div>
            {this.props.elements.length > 1?
              <Question
                question={this.props.question}/>
              : null
            }
            {this.props.currentElement && <Answer
                     answer={this.props.question}
                     selection={this.props.currentElement}
                     currentScore={this.props.currentScore}
                  />}
            <NextButton
              handleClick={this.props.cycleQuestions}/>
          </div>
      </div>
    );
  }
}

export default SideDisplay;
