import { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div id="content">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Tìm kiếm
              </button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </a>
              </li>
              <li className="dropdown">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                  User Setting <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/#">Thay đổi mật khẩu</a>
                  </li>
                  <li>
                    <a href="/#">Đăng xuất</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
