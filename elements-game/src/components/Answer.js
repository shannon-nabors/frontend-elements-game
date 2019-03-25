import React from 'react';
import { Container } from 'semantic-ui-react';

class Answer extends React.Component {
  render() {
    return (
      <Container>
        <div className="answer">
          <p className="ansDisplay">This is the answer</p>
          <br />
          <br />
          <br />
          <p className="ansDisplay">
            This is additional information about the correct element
          </p>
        </div>
      </Container>
    );
  }
}

export default Answer;
