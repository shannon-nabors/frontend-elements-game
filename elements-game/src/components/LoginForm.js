import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'

class Login extends Component {
  state = {
    username: "",
    password: ""
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
    		password: this.state.password
    	})
    }).then(res => res.json())
    .then(data => this.props.update(data))
  }

  render() {
    return(
      <Container id="login-area">
        <Header as='h3'>Log in</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="username"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <Form.Input
            type="password"
            label="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <Button type="submit">Log in</Button>
        </Form>
      </Container>
    )
  }
}

export default Login
