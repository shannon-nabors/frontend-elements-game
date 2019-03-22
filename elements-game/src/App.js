import React, { Component } from 'react';
import Table from './containers/Table'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {elements: []}
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')
    .then(res => res.json())
    .then(elementsData => this.setState({elements: elementsData.elements}))
  }

  formatElementsForTable() {

    let blankKey = 120

    const blanks = (number) => {
      let blanksArr = []
      for (let i = 0; i < number; i++) {
        blanksArr.push({number: blankKey})
        blankKey++
      }
      return blanksArr
    }

    let formattedElements =
      [...this.state.elements.slice(0,1),
       ...blanks(16),
       ...this.state.elements.slice(1,4),
       ...blanks(10),
       ...this.state.elements.slice(4,12),
       ...blanks(10),
       ...this.state.elements.slice(12,56),
       ...blanks(1),
       ...this.state.elements.slice(71,88),
       ...blanks(1),
       ...this.state.elements.slice(103,118),
       ...blanks(20),
       ...this.state.elements.slice(56,71),
       ...blanks(3),
       ...this.state.elements.slice(88,103),
     ]
    return formattedElements
  }

  render() {
    return (
      <div className="App">
        <div className="ui grid">
          <div className="ui one wide column">
          </div>
          <div className="ui twelve wide column">
            <Table elements={this.formatElementsForTable()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
