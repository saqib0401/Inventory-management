import React from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";

const HomePage = ({ userName }) => {
  return (
    <div>
      <Header name={userName} />
      <ProductsList />
    </div>
  );
};

export default HomePage;
