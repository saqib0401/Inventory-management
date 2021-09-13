import React, { useState } from "react";
import { SearchBox } from "./SearchBox";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const ProductsList = ({ products }) => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const filteredProducts = products.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  return (
    <div className="products-container">
      <h1>List of Products</h1>
      <SearchBox handleChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => history.push("/add")} className="add-product">
        Add products
      </button>
      <ul className="products-list">
        {filteredProducts.map((product, idx) => (
          <li key={idx} className="products">
            Name:{product.name}
            <br />
            <img
              src={product.image}
              alt="product"
              style={{ height: "200px", width: "200px" }}
            />
            Description: {product.description}
            <br />
            Price: {product.price} <br />
            Quantity:{product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.currentProducts,
});

export default connect(mapStateToProps)(ProductsList);
