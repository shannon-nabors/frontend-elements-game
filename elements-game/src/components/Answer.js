import React from 'react';
import {Card} from 'semantic-ui-react';

class Answer extends React.Component {
  render() {
    let { number, symbol, atomic_mass, boil, category, discovered_by, melt, name, period, summary, spectral_img } = this.props.answer
    return (
      <Card className="ui centered raised" id="answer">

          <div className="header">
            {this.props.answer === this.props.selection ? "Correct!" : "Incorrect!"}
            Current score: {this.props.currentScore()}
          </div>

          <div className="header">
            {name} ({symbol})
          </div>

          <div className="description">
            <p>Atomic number: {number}</p>
            <p>Atomic mass: {atomic_mass}</p>
          </div>

      </Card>
    );
  }
}

export default Answer;
