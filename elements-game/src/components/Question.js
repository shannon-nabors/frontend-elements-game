import React from 'react';
import { Container } from 'semantic-ui-react';

class Question extends React.Component {
  render() {
    return (
      <Container>
        <div className="question">
          <p>{this.props.question.name}</p>
        </div>
      </Container>
    );
  }
}

export default Question;
