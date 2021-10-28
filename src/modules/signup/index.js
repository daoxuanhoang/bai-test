import { Component } from "react";
import "./styles.css";

class Signup extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.name,
      email: this.email,
      dayofbirth: this.dayofbirth,
      gender: this.gender,
      daycreate: this.daycreate,
      password: this.password,
      confirmpassword: this.comfirmpassword,
    };
    console.log(data);
  };
  render() {
    return (
      <div className="register">
        <div id="formContent">
          <div>
            <h2>Đăng kí</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="name"
              className="fadeIn second"
              name="name"
              placeholder="Tên"
              onChange={(e) => (this.name = e.target.value)}
            />
            <input
              type="text"
              id="email"
              className="fadeIn third"
              name="email"
              placeholder="email"
              onChange={(e) => (this.email = e.target.value)}
            />
            <input
              type="text"
              id="dayofbirth"
              className="fadeIn third"
              name="dayofbirth"
              placeholder="ngày sinh"
              onChange={(e) => (this.dayofbirth = e.target.value)}
            />
            <input
              type="text"
              id="gender"
              className="fadeIn third"
              name="gender"
              placeholder="gender"
              onChange={(e) => (this.gender = e.target.value)}
            />
            <input
              type="text"
              id="daycreate"
              className="fadeIn third"
              name="daycreate"
              placeholder="ngày tạo"
              onChange={(e) => (this.daycreate = e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="mật khẩu"
              onChange={(e) => (this.password = e.target.value)}
            />
            <input
              type="password"
              id="confirmpassword"
              className="fadeIn third"
              name="confirmpassword"
              placeholder="nhập lại mật khẩu"
              onChange={(e) => (this.comfirmpassword = e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Đăng kí
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
