import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    username: "",
    redirect: false
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    fetch('http://localhost:3000/users/login', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
    	body:JSON.stringify({
    		username: this.state.username,
    	})
    }).then(res => res.json())
    .then(data => {
      this.props.update(data)
      this.setState({redirect: true})
    })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to="/periodic_table"/>
    }

    return(
      <Container className="ui attached segment" id="form-area">
        <Header as='h3'>Log in</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <Button type="submit">Log in</Button>
        </Form>
        <br></br>
        <br></br>
        <Link to="/create_account" className="fluid ui button">
        New user? Create an account
        </Link>
      </Container>
    )
  }
}

export default Login
