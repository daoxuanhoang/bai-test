import { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterGender: -1, //all:-1, active: 1, deactive: 0
    };
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    var filter = {
      name: name === "filterName" ? value : this.state.filterName,
      gender: name === "filterGender" ? value : this.state.filterGender,
    };
    this.props.onFilterTable(filter);
    this.setState({
      [name]: value,
    });
  };
  render() {
    var { users, filterTable, keyword, sort } = this.props;
    var { filterName, filterGender } = this.state;
    if (filterTable) {
      if (filterTable.name) {
        users = users.filter((user) => {
          return user.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
        });
      }
      users = users.filter((user) => {
        if (filterTable.gender === -1) {
          return user;
        } else {
          return user.gender === (filterTable.gender === 1 ? true : false);
        }
      });
    }
    if (keyword) {
      users = users.filter((user) => {
        return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }
    if (sort.sortBy === "name") {
      users.sort((a, b) => {
        if (a.name > b.name) return sort.sortValue;
        else if (a.name < b.name) return -sort.sortValue;
        else return 0;
      });
    } else {
      users.sort((a, b) => {
        if (a.gender > b.gender) return -sort.sortValue;
        else if (a.gender < b.gender) return sort.sortValue;
        else return 0;
      });
    }
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Ngày sinh</th>
            <th className="text-center">Giới tính</th>
            <th className="text-center">Ngày tạo</th>
            <th className="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={filterName}
                onChange={this.onChange}
              />
            </td>
            <td></td>
            <td>
              <select
                className="form-control"
                name="filterGender"
                value={filterGender}
                onChange={this.onChange}
              >
                <option value={-1}>Tất cả</option>
                <option value={0}>Nữ</option>
                <option value={1}>Nam</option>
              </select>
            </td>
            <td></td>
          </tr>
          {users.map((user, index) => {
            return <UserItem key={user.id} index={index} user={user} />;
          })}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(actions.filterTable(filter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
