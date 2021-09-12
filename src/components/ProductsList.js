import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const ProductsList = ({ products }) => {
  const history = useHistory();
  return (
    <div className="products-container">
      <h1>List of Products</h1>
      <button onClick={() => history.push("/add")}>Add products</button>
      <ul className="products-list">
        {products.map((product, idx) => (
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
