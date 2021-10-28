import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";

class Sort extends Component {
  onClick = (sortBy, sortValue) => {
    this.props.onSort({
      sortBy: sortBy,
      sortValue: sortValue,
    });
  };
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sắp xếp <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu">
            <li
              onClick={() => {
                this.onClick("name", 1);
              }}
            >
              <button
                className={
                  this.props.sort.sortBy === "name" &&
                  this.props.sort.sortValue === 1
                    ? "sort_selected"
                    : ""
                }
              >
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </button>
            </li>
            <li
              onClick={() => {
                this.onClick("name", -1);
              }}
            >
              <button
                className={
                  this.props.sort.sortBy === "name" &&
                  this.props.sort.sortValue === -1
                    ? "sort_selected"
                    : ""
                }
              >
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </button>
            </li>
            <li role="separator" className="divider"></li>
            <li
              onClick={() => {
                this.onClick("gender", 1);
              }}
            >
              <button
                className={
                  this.props.sort.sortBy === "gender" &&
                  this.props.sort.sortValue === 1
                    ? "sort_selected"
                    : ""
                }
              >
                Giới tính nam
              </button>
            </li>
            <li
              onClick={() => {
                this.onClick("gender", -1);
              }}
            >
              <button
                className={
                  this.props.sort.sortBy === "gender" &&
                  this.props.sort.sortValue === -1
                    ? "sort_selected"
                    : ""
                }
              >
                Giới tính nữ
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => {
      dispatch(actions.sortuser(sort));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
