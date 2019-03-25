import React from 'react';
import { Button } from 'semantic-ui-react';

class NextButton extends React.Component {
  render() {
    return (
      <Button
        onClick={this.props.handleClick}>
        Next Question
      </Button>
    );
  }
}

export default NextButton;
