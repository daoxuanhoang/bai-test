import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Redirect } from "react-router";

function Login({users, setUser }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const adminUser = {
    email: "admin@gmail.com",
    password: "123",
  };
  const submitHandle = (e) => {
    e.preventDefault();
    Signin(details);
  };
  const Signin = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Đăng nhập không thành công!");
    }
  };
  if(users.email !== "") {
    return <Redirect to="/" />
  }
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div>
          <h2>Đăng Nhập</h2>
          {error !== "" ? (
            <div className="error alert alert-danger">{error}</div>
          ) : (
            ""
          )}
        </div>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            id="name"
            className="fadeIn second"
            name="name"
            placeholder="Tên"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
          <input
            type="text"
            id="email"
            className="fadeIn third"
            name="email"
            placeholder="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <button type="submit" className="btn btn-primary">
            Đăng nhập
          </button>
          <hr/>
          <div className="form">
           <Link to="/register">Đăng kí</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
