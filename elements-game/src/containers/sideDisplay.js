import React from 'react';
import Question from '../components/Question'
import Answer from '../components/Answer'

class sideDisplay extends React.Component {
  render() {
    return (
      <div className="sideDisplay">
          <div>
            <Question />
            <Answer />
          </div>
      </div>
    );
  }
}

export default sideDisplay;