import React from 'react';
import Dropdown from '../components/Dropdown'

class NavBar extends React.Component {

  render() {
    const { handleNavSel, handleGameSel } = this.props;
    return (
      <div className="ui secondary  menu">
        <input
          type="button"
          className="item active"
          value="Login/Create"
          name="login"
          onClick={handleNavSel}
        />

        <input
          type="button"
          className="item"
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
          onClick={handleNavSel}
        />

      </div>
    );
  }
}

export default NavBar;
