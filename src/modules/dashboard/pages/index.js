import { Component } from "react";
import "./styles.css";
import SideBar from "../../../commons/sidebar";
import NavBar from "../../../commons/navbar";

class DashboardPage extends Component {
  render() {
    return (
        <div id="viewport">
          <SideBar />
          <NavBar />
          <div className="container-fluid">Dashboard</div>
        </div>
    );
  }
}

export default DashboardPage;
