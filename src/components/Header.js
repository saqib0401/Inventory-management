import React from "react";

const Header = ({ name, setIsLoggedIn }) => (
  <div style={{ float: "right", marginRight: "100px", marginTop: "10px" }}>
    <span style={{ fontSize: "1em", fontWeight: "500" }}>{name} </span>
    <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
  </div>
);

export default Header;
