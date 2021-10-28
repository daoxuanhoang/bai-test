import React, { Component } from "react";
import Search from "./UserSearchControl";
import Sort from "./UserSortControl";

class Control extends Component {
  render() {
    return (
      <div className="row mt-15">
        <Search />
        <Sort />
      </div>
    );
  }
}
export default Control;
