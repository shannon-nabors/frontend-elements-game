import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const gameOptions = [
  {
    text: 'Learn',
    value: 'Learn'
  },
  {
    text: 'Quiz',
    value: 'Quiz'
  },
  {
    text: 'Timed',
    value: 'Timed'
  }
];

const DropdownExampleSelection = props => (
  <Dropdown
    placeholder="Select Game"
    fluid
    search
    selection
    options={gameOptions}
    onChange={(e) => props.handleGameSel(e)}
  />
);

export default DropdownExampleSelection;
