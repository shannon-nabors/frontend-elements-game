import React, { Component } from 'react';
import NavBar from './NavBar';
import { Table } from 'semantic-ui-react';
import TableRow from '../components/TableRow'

class ScoresTable extends Component {
  render() {
    return (
      <div className="ui grid">
        <NavBar
          gameSel={this.props.gameSel}
          handleGameSel={this.props.handleGameSel}
          handleNavSel={this.props.handleNavSel}
          user={this.props.user}
          logout={this.props.logout}
        />
        <div className="ui row">
          <div className="ui two wide column" />
          <div className="ui ten wide column">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Mode</Table.HeaderCell>
                  <Table.HeaderCell>Correct</Table.HeaderCell>
                  <Table.HeaderCell>Total</Table.HeaderCell>
                  <Table.HeaderCell>% Correct</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.props.currentScores.map( (score, idx) => 
                  (<TableRow key={idx} score={score} 
                    user={this.props.user}
                    />)
                  )}
                </Table.Body>
            </Table>
          </div>
          <div className="ui two wide column" />
        </div>
      </div>
    );
  }
}

export default ScoresTable;
