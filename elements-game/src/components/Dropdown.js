import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const gameOptions = [
  {
    key: 'login',
    text: 'Login/Create',
    value: 'login'
  },
  {
    key: 'periodic',
    text: 'Periodic Table',
    value: 'periodic'
  },
  {
    key: 'scores',
    text: 'Scores',
    value: 'score'
  }
];

const DropdownExampleSelection = props => (
  <Dropdown
    placeholder="Select Game"
    fluid
    search
    selection
    options={gameOptions}
    // value={props.gameSel}
    onChange={(e) => props.handleGameSel(e)}
  />
);

export default DropdownExampleSelection;
