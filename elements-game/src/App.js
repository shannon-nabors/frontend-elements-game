import React, { Component } from 'react';
import Table from './containers/Table';
import Navbar from './containers/NavBar';
import Login from './components/LoginForm'
import Create from './components/CreateUser'
import ElementDetails from './components/ElementDetails';
import SideDisplay from './containers/SideDisplay'
import { Header } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      elements: [],
      element: null,
      navSel: 'login',
      gameSel: 'Learn',
      questions: [],
      correct: 0,
      total: 0,
      currentUser: null,
      currentScores: []
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

  // Handle game selection from dropdown
  handleGameSel = e => {
    e.persist();
    this.setState({
      gameSel: e.target.textContent
    });
  };

  // Array for table element -- includes blank spaces for display
  formatElementsForTable() {
    let blankKey = 120;
    const blanks = number => {
      let blanksArr = [];
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
      ...this.state.elements.slice(88, 103),
      ...blanks(1)
    ];
    return formattedElements;
  }

  // Handle clicks in navbar
    handleNavSel = e => {
      console.log(e.target.name);
      this.setState({
        navSel: e.target.value
      });
    };

    handleGameSel = (e) => {
      this.setState({
        gameSel: e.target.textContent,
        element: null,
        correct: 0,
        total: 0
      });
      if (e.target.textContent === "Quiz") {
        this.setState({questions: this.chooseQuestions(5)})
      }
    };

  // Choose questions for quiz
  chooseQuestions(num) {
    let els = [...this.state.elements]
    let questions = []

    for (let i=0; i<num; i++) {
      let ind = Math.floor(Math.random() * els.length)
      let el = els.splice(ind, 1)
      questions.push(el[0])
    }

    return questions
  }


  // Handle click of element
  handleElementClick = el => {
    if (this.state.gameSel === "Quiz" && !this.state.element && this.state.questions.length > 0) {
      this.setSelectedElement(el)
      this.evaluateAnswer(el)
    } else if (this.state.gameSel === "Quiz" && !this.state.element && this.state.questions.length === 0) {

    } else if (this.state.gameSel === "Learn"){
      this.setSelectedElement(el)
    }
  }

  setSelectedElement = el => {
    this.setState({ element: el })
  }

  evaluateAnswer = (el) => {
    this.setState({total: this.state.total + 1})
    if (el.number === this.state.questions[0].number) {
      this.setState({correct: this.state.correct + 1})
    }
  }

  displayCurrentScore = () => {
    return(`${this.state.correct}/${this.state.total}`)
  }

  displayPercent = () => {
    return(`${Math.floor((this.state.correct/this.state.total)*100)}%`)
  }

  // Handle click of next button
  cycleQuestions = () => {
    if (this.state.questions.length > 0) {
      let newQuestions = this.state.questions.slice(1)
      this.setState({questions: newQuestions})
    }
    this.setSelectedElement(null)
  }

  // Handle click outside of modal
  handleModalExit = () => {
    this.setState({ element: null });
  };

  // Handle login
  updateUserInfo = (userData) => {
    this.setState({
      currentUser: userData.user,
      currentScores: userData.scores
    })
  }


  // Render page
  render() {
    return (
      <div className="App">
        <Header id="header" as="h1">Elemental Turn-up</Header>
        <Login update={this.updateUserInfo}/>
      </div>
    );
  }
}

export default App;
