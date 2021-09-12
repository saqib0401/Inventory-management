import React from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";

const HomePage = ({ userName, setIsLoggedIn }) => {
  return (
    <div>
      <Header name={userName} setIsLoggedIn={setIsLoggedIn} />
      <ProductsList />
    </div>
  );
};

export default HomePage;
