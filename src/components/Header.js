import React from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/login/login.actions";

const Header = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ float: "right", marginRight: "100px", marginTop: "10px" }}>
      <span style={{ fontSize: "1em", fontWeight: "500" }}>{name} </span>
      <button onClick={() => dispatch(setLogin(false))}>LogOut</button>
    </div>
  );
};

export default Header;
