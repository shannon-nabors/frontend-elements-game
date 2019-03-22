import React, { Component } from 'react';
import Table from './containers/Table';
import Navbar from './containers/NavBar';
import ElementDetails from './components/ElementDetails'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      elements: [],
      element: null,
      navSel: 'login',
      gameSel: 'Learn'
    };
  }


  // Load all elements on mount
  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json'
    )
      .then(res => res.json())
      .then(elementsData => this.setState({ elements: elementsData.elements }));
  }

  // Handle clicks in navbar
    handleNavSel = e => {
      console.log(e.target.name);
      this.setState({
        navSel: e.target.value
      });
    };

    handleGameSel = (e) => {
      e.persist()
      console.log(e.target.textContent)
      this.setState({
        gameSel: e.target.textContent
      });
    };

  // Array for table element -- includes blank spaces for display
  formatElementsForTable() {
    let blankKey = 120
    const blanks = (number) => {
      let blanksArr = []
      for (let i = 0; i < number; i++) {
        blanksArr.push({ number: blankKey });
        blankKey++;
      }
      return blanksArr;
    };

    let formattedElements = [
      ...this.state.elements.slice(0, 1),
      ...blanks(16),
      ...this.state.elements.slice(1, 4),
      ...blanks(10),
      ...this.state.elements.slice(4, 12),
      ...blanks(10),
      ...this.state.elements.slice(12, 56),
      ...blanks(1),
      ...this.state.elements.slice(71, 88),
      ...blanks(1),
      ...this.state.elements.slice(103, 118),
      ...blanks(20),
      ...this.state.elements.slice(56, 71),
      ...blanks(3),
      ...this.state.elements.slice(88, 103)
    ];
    return formattedElements;
  }

  // Handle click of element
  handleElementClick = (el) => {
    this.setSelectedElement(el)
    console.log(el)
  }

  setSelectedElement = (el) => {
    this.setState({element: el})
  }

  // Handle click outside of modal
  handleModalExit = () => {
    this.setState({element: null})
  }

  // Render page
  render() {
    return (
      <div className="App">
        <div className="ui grid">
          <div className="ui row">
            <div className="ui one wide column"></div>
            <div className="ui twelve wide column">
              <Navbar
                gameSel={this.state.gameSel} handleGameSel={this.handleGameSel} handleNavSel={this.handleNavSel}
              />
            </div>
          </div>

          <div className="ui one wide column"></div>
          <div className="ui eleven wide column">
            <Table
              elements={this.formatElementsForTable()}
              handleClick={this.handleElementClick}
            />

            {this.state.element ?
              <ElementDetails
                element={this.state.element}
                exit={this.handleModalExit}/>
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
