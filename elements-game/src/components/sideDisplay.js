import React from 'react';
import Question from './Question'

class sideDisplay extends React.Component {
  render() {
    return (
      <div className="sideDisplay">
          <div>
            <Question />
          </div>
      </div>
    );
  }
}

export default sideDisplay;