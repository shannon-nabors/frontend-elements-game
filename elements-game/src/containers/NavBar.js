import React from 'react';
import Dropdown from '../components/Dropdown'

class NavBar extends React.Component {

  render() {
    const { handleNavSel, handleGameSel } = this.props;
    return (
      <div className="ui secondary menu" id="nav-bar">
        <div className="header item">Welcome, {this.props.user.first_name}</div>
        <input
          type="button"
          className="item active"
          value="Periodic Table"
          name="periodic"
          onClick={handleNavSel}
        />
        <input
          type="button"
          className="item"
          value="Scores"
          name="score"
          onClick={handleNavSel}
        />

        <Dropdown handleGameSel={handleGameSel}/>

        <input
          type="button"
          className="ui item"
          value="Logout"
          name="logout"
          onClick={this.props.logout}
        />

      </div>
    );
  }
}

export default NavBar;
