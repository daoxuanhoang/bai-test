import { Component } from "react";
import UserList from "../components/UserList";
import Control from "../components/UserControl";
import UserForm from "../components/UserForm";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import SideBar from "../../../commons/sidebar";
import NavBar from "../../../commons/navbar";

class ManagerUserPage extends Component {
  onToggleForm = () => {
    var { userEditing } = this.props;
    if (userEditing && userEditing.id !== "") {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearUser({
      id: "",
      name: "",
      dayofbirth: "",
      gender: false,
      daycreate: ""
    });
  };
  render() {
    var { isDisplayForm } = this.props;
    return (
      <div className="container" id="viewport">
        <SideBar/>
        <NavBar/>
        <div className="text-center">
          <h1>Quản lý người dùng</h1>
        </div>

        <div className="row">
          <div
            className={
              isDisplayForm === true
                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                : ""
            }
          >
            {/* Form */}
            <UserForm />
          </div>
          <div
            className={
              isDisplayForm === true
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5"></span>Thêm người dùng
            </button>
            &nbsp;
            {/* search-sort */}
            <Control />
            {/* list */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <UserList onFilter={this.onFilter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    userEditing: state.userEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClearUser: (user) => {
      dispatch(actions.updateuser(user));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagerUserPage);
