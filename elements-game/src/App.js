import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/LoginForm';
import Create from './components/CreateUser';
import QuizPage from './containers/QuizPage';
import ElementDetails from './components/ElementDetails';
import ScorePanel from './components/ScorePanel';
import ScoresTable from './containers/ScoresTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      elements: [],
      element: null,
      gameSel: 'Learn',
      questions: [],
      correct: 0,
      total: 0,
      currentUser: {first_name: "Guest"},
      currentScores: [],
      loggedIn: false
    }
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
  formatElementsForTable = () => {
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
      ...this.state.elements.slice(103, 119),
      ...blanks(19),
      ...this.state.elements.slice(56, 71),
      ...blanks(3),
      ...this.state.elements.slice(88, 103),
      ...blanks(1)
    ];
    return formattedElements;
  };

  // Handle clicks in navbar
  handleNavSel = e => {
    console.log(e.target.name);
    this.setState({
      navSel: e.target.value
    });
  };

  handleGameSel = e => {
    this.setState({
      gameSel: e.target.textContent,
      element: null,
      correct: 0,
      total: 0
    });
    if (e.target.textContent === 'Quiz') {
      this.setState({ questions: this.chooseQuestions(5) });
    }
  };

  // Set up quiz
  chooseQuestions(num) {
    let els = [...this.state.elements];
    let questions = [];

    for (let i = 0; i < num; i++) {
      let ind = Math.floor(Math.random() * els.length);
      let el = els.splice(ind, 1);
      questions.push(el[0]);
    }

    return questions;
  }

  resetQuiz = () => {
    this.setState({
      element: null,
      correct: 0,
      total: 0
    })
    if (this.state.gameSel === "Quiz") {
      this.setState({questions: this.chooseQuestions(5)})
    }
  }


  // Handle click of element
  handleElementClick = el => {
    if (this.state.gameSel === "Quiz"
    && !this.state.element
    && this.state.questions.length > 0) {
      this.setSelectedElement(el)
      this.evaluateAnswer(el)
    } else if (this.state.gameSel === "Quiz"
    && !this.state.element
    && this.state.questions.length === 0) {
      //
    } else if (this.state.gameSel === "Learn"){
      this.setSelectedElement(el)
    }
  };

  setSelectedElement = el => {
    this.setState({ element: el });
  };

  evaluateAnswer = el => {
    this.setState({ total: this.state.total + 1 });
    if (el.number === this.state.questions[0].number) {
      this.setState({ correct: this.state.correct + 1 });
    }
  };

  displayCurrentScore = () => {
    return `${this.state.correct}/${this.state.total}`;
  };

  displayPercent = () => {
    return `${Math.floor((this.state.correct / this.state.total) * 100)}%`;
  };

  // Handle click of next button
  cycleQuestions = () => {
    if (this.state.questions.length > 0) {
      let newQuestions = this.state.questions.slice(1);
      this.setState({ questions: newQuestions });
    }
    this.setSelectedElement(null);
  };

  updateUserScores = () => {
    this.cycleQuestions()
    fetch('http://localhost:3000/scores', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
    	body:JSON.stringify({
    		user_id: this.state.currentUser.id,
        mode: this.state.gameSel,
        correct: this.state.correct,
        total: this.state.total
    	})
    }).then(res => res.json())
    .then(score => {
      let newScores = [...this.state.currentScores, score]
      this.setState({
        currentScores: newScores
      })
    })
  }

  // Handle click outside of modal
  handleModalExit = () => {
    this.setState({ element: null });
  };

  // Handle login
  updateUserInfo = userData => {
    this.setState({
      currentUser: userData.user,
      currentScores: userData.scores,
      loggedIn: true
    })
  }

  // Handle logout
  handleLogout = () => {
    this.setState({
      element: null,
      gameSel: 'Learn',
      questions: [],
      correct: 0,
      total: 0,
      currentUser: {first_name: "Guest"},
      currentScores: [],
      loggedIn: false
    })
  }


  // Render page
  render() {
    return (
      <div className="App">
        <Header id="header" as="h1">
          Elemental
        </Header>

        <Switch>
          <Route
            path="/periodic_table"
            render= {() => <QuizPage
              gameSel={this.state.gameSel}
              handleGameSel={this.handleGameSel}
              handleNavSel={this.handleNavSel}
              formatElementsForTable={this.formatElementsForTable}
              handleElementClick={this.handleElementClick}
              element={this.state.element}
              handleModalExit={this.handleModalExit}
              questions={this.state.questions}
              cycleQuestions={this.cycleQuestions}
              question={this.state.questions[0]}
              setSelectedElement={this.setSelectedElement}
              displayCurrentScore={this.displayCurrentScore}
              displayPercent={this.displayPercent}
              user={this.state.currentUser}
              loggedIn={this.state.loggedIn}
              logout={this.handleLogout}
              updateUserScores={this.updateUserScores}
              resetQuiz={this.resetQuiz}
            />}
          />
          <Route
            path="/create_account"
            render={() => <Create update={this.updateUserInfo}/>}
          />
          <Route
            path="/scores"
            render={() => <ScoresTable
              currentUser={this.state.currentUser}
              currentScores={this.state.currentScores}
              gameSel={this.state.gameSel}
              handleGameSel={this.handleGameSel}
              handleNavSel={this.handleNavSel}
              user={this.state.currentUser}
              logout={this.handleLogout}
            />}
          />
          <Route
            render={() => <Login update={this.updateUserInfo}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
