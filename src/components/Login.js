import React from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/login/login.actions";

const Login = ({ setUserName }) => {
  const dispatch = useDispatch();
  function handleSubmit() {
    dispatch(setLogin(true));
  }
  return (
    <div className="login">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email"></input>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;
