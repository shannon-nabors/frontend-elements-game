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
    id="dropDown"
    fluid
    search
    selection
    options={gameOptions}
    onChange={(e) => props.handleGameSel(e)}
  />
);

// const DropdownExampleSelection = props => (
//   <div
//     className="ui menu"
//     id="drop-down"
//     onClick={props.handleClick}>
//     <div className="ui pointing dropdown link item">
//       <span className="text">Select game</span>
//       <i className="dropdown icon"></i>
//       <div className="menu">
//         <div className="header">Categories</div>
//         <div className="item">Learn</div>
//         <div className="item">
//           <i className="dropdown icon"></i>
//           <span className="text">Quiz</span>
//           <div className="menu">
//             <div className="header">Classic</div>
//             <div className="item">Name to Symbol</div>
//             <div className="item">Name to Number</div>
//             <div className="item">Symbol to Number</div>
//             <div className="divider"></div>
//             <div className="header">Timed</div>
//             <div className="item">1 minute</div>
//             <div className="item">2 minutes</div>
//             <div className="item">3 minutes</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

export default DropdownExampleSelection;
