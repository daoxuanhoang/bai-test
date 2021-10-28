import { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';

class UserItem extends Component {
  onDelete = () => {
    this.props.onDeleteUser(this.props.user.id);
    this.props.onCloseForm();
  };
  onUpdate = () => {
    this.props.onOpenForm();
    this.props.onUpdateUser(this.props.user);
  }
  render() {
    var { user, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.dayofbirth}</td>
        <td className="text-center">
          <span
            className={
              user.gender === true
                ? "label label-danger"
                : "label label-success"
            }
          >
            {user.gender === true ? "Nam" : "Nữ"}
          </span>
        </td>
        <td>{user.daycreate}</td>
        <td className="text-center">
          <button type="button" className="btn btn-warning" onClick={this.onUpdate} >
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger" onClick={this.onDelete} >
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );
  }
};

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteUser: (id) => {
      dispatch(actions.deleteuser(id));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onUpdateUser: (user) => {
      dispatch(actions.updateuser(user));
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
