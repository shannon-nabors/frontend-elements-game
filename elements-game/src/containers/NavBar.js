import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';

class NavBar extends Component {
  render() {
    const { handleNavSel, handleGameSel } = this.props;

    return (
      <div id="nav-bar">
        <Container>
          <Menu secondary stackable widths={5}>
          <Menu.Item header className="nav-item">
            Welcome, {this.props.user.first_name}
          </Menu.Item>
            <Menu.Item
              as={Link}
              to="/periodic_table"
              name="periodic_table"
              className="ui item nav-item"
              onClick={handleNavSel}
            >
              Periodic Table
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/scores"
              name="score"
              className="ui item nav-item"
              onClick={handleNavSel}
            >
              Scores
            </Menu.Item>

            <Menu.Item>
              <Dropdown handleGameSel={handleGameSel} />
            </Menu.Item>

            <Menu.Item
              className="ui item nav-item"
              name="logout"
              onClick={this.props.logout}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Container>
      </div>
    );
  }
}

export default NavBar;
