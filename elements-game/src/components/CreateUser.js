import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'

class CreateUser extends Component {
  render() {
    return(
      <Container id="login-area">
        <Header as='h3'>Create an account</Header>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" />
          </Form.Field>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last name" />
          </Form.Field>
        </Form>
      </Container>
    )
  }
}

export default CreateUser
