import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      dayofbirth:"",
      gender: "",
      daycreate: "",
      status: false,
    };
  }
  onCloseFrom = () => {
    this.props.onCloseForm();
  };
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var dayofbirth = target.dayofbirth;
    var daycreate = target.daycreate;
    var value = target.value;
    if (name === "gender") {
      value = target.value === "true" ? true : false;
    }
    if (value.length > 0 || name === "gender") {
      this.setState({
        [name]: value,
        [dayofbirth]: value,
        [daycreate]: value,
      });
    }
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSaveUser(this.state);
    //Cancel & close form
    this.onClear();
    this.onCloseFrom();
  };

  onClear = () => {
    this.setState({
      name: "",
      dayofbirth: "",
      gender: false,
      daycreate: "",
    });
  };
  componentWillMount() {
    if (this.props.userEditing && this.props.userEditing !== null) {
      this.setState({
        id: this.props.userEditing.id,
        name: this.props.userEditing.name,
        dayofbirth: this.props.userEditing.dayofbirth,
        gender: this.props.userEditing.gender,
        daycreate: this.props.userEditing.daycreate,
      });
    } else {
      this.onClear();
    }
  }
  componentWillReceiveProps(prevProps) {
    if (prevProps && prevProps.userEditing) {
      this.setState({
        id: prevProps.userEditing.id,
        name: prevProps.userEditing.name,
        dayofbirth: prevProps.userEditing.dayofbirth,
        gender: prevProps.userEditing.gender,
        daycreate: prevProps.userEditing.daycreate,
      });
    } else {
      this.onClear();
    }
  }
  render() {
    var { id, name, dayofbirth, daycreate, gender } = this.state;
    if (!this.props.isDisplayForm) return null;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {!id ? "Thêm người dùng" : "Cập nhật người dùng"}
            <span
              className="fa fa-times-circle text-right"
              onClick={this.onCloseFrom}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={this.onChange}
                // required
              />
            </div>
            <div className="form-group">
              <label>Ngày sinh :</label>
              <input
                type="text"
                className="form-control"
                name="dayofbirth"
                value={dayofbirth}
                onChange={this.onChange}
                // required
              />
            </div>
            <div className="form-group">
              <label>Giới tính:</label>
              <select
                name="gender"
                className="form-control"
                value={gender}
                onChange={this.onChange}
              >
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </select>
            </div>
            <div className="form-group">
              <label>Ngày tạo:</label>
              <input
                type="text"
                className="form-control"
                name="daycreate"
                value={daycreate}
                onChange={this.onChange}
                // required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-5"></span>Lưu lại
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                <span className="fa fa-close mr-5"></span>Hủy bỏ
              </button>
            </div>
          </form>
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
    onSaveUser: (user) => {
      dispatch(actions.saveUser(user));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
