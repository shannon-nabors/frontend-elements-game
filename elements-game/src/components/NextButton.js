import React from 'react';
import { Button } from 'semantic-ui-react';

class NextButton extends React.Component {
  render() {
    return (
      <Button
        onClick={this.props.handleClick}
        id="next-button"
        >
        {this.props.elements.length > 1 ? "Next Question" : "SEE SCORE"}
      </Button>
    );
  }
}

export default NextButton;
