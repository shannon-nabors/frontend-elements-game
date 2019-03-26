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
          <Menu secondary stackable widths={4}>
            <Menu.Item
              as={Link}
              to="/periodic_table"
              name="periodic_table"
              onClick={handleNavSel}
            >
              Periodic Table
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/scores"
              name="score"
              onClick={handleNavSel}
            >
              Scores
            </Menu.Item>

            <Menu.Item>
              <Dropdown handleGameSel={handleGameSel} />
            </Menu.Item>

            <Menu.Item name="logout" as={Link}>
              Logout
            </Menu.Item>
          </Menu>
        </Container>
      </div>
    );
  }
}

export default NavBar;
