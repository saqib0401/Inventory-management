import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../redux/login/login.actions";

const Header = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user.user);
  return (
    <div style={{ float: "right", marginRight: "100px", marginTop: "10px" }}>
      <span style={{ fontSize: "1em", fontWeight: "500" }}>{userState} </span>
      <button onClick={() => dispatch(setLogin(false))}>LogOut</button>
    </div>
  );
};

export default Header;
