import React from 'react';
import { Container } from 'semantic-ui-react';

class Question extends React.Component {
  render() {
    return (
      <Container>
        <div className="question">
          <p>This is my question, what are your thoughts?</p>
        </div>
      </Container>
    );
  }
}

export default Question;
