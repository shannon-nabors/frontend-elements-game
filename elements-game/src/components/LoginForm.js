import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'

class Login extends Component {
  state = {
    username: ""
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
    .then(data => this.props.update(data))
  }

  render() {
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
        <div className="fluid ui button">
        New user? Create an account
        </div>
      </Container>
    )
  }
}

export default Login
