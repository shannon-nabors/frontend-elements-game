import React from 'react';

class Question extends React.Component {
  render() {
    return (
        <div className="question">
          <p>Click on the element named {this.props.question.name}</p>
        </div>
    );
  }
}

export default Question;
