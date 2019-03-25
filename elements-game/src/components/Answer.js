import React from 'react';
import {Card} from 'semantic-ui-react';

class Answer extends React.Component {
  render() {
    let { number, symbol, atomic_mass, boil, category, discovered_by, melt, name, period, summary, spectral_img } = this.props.answer
    return (
      <Card className="ui centered raised" id="answer">

          <div className="header" >
            {this.props.answer === this.props.selection ? "Correct!" : "Incorrect!"}
            <br/>
            Current score: {this.props.currentScore()}
          </div>
          <br/>
          <div className="header">
          <p>{name} ({symbol})</p>
          </div>

          <div className="description">
            Atomic number: {number}
            <br/>
            Atomic mass: {atomic_mass}
          </div>
      </Card>
    );
  }
}

export default Answer;
