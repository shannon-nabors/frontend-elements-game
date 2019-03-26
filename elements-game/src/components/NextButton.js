import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

class NextButton extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.remaining > 1 && <Button
            onClick={this.props.handleClick}
            id="next-button"
          >Next Question</Button>}
         {this.props.remaining === 1 && <Button
            onClick={this.props.update}
            id="next-button"
          >Show Scores</Button>}
      </Fragment>
    );
  }
}

export default NextButton;
