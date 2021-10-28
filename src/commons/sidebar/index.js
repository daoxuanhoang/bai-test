import { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        <header>
          <a href="/#">My App</a>
        </header>
        <ul className="nav">
          <li>
            <Link to="/">
              <i className="zmdi zmdi-view-dashboard"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/magager-user">
              <i className="zmdi zmdi-link"></i> Quản lý người dùng
            </Link>
          </li>
          <li>
            <Link to="/user-profile">
              <i className="zmdi zmdi-widgets"></i> Thông tin người dùng
            </Link>
          </li>
        </ul>
      </div>
    );
  }
};
export default SideBar;
