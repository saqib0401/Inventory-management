import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setCurrentProducts } from "../redux/products/products.actions";

const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);
    e.preventDefault();
    dispatch(setCurrentProducts(data));
    history.push("/");
  }
  return (
    <form onSubmit={handleSubmit} className="product-form">
      <label>Name :</label>
      <input type="text" required name="name" placeholder="enter name" />
      <label>Description :</label>
      <input type="text" name="description" placeholder="enter description" />
      <label>Price :</label>
      <input type="number" required name="price" placeholder="enter price" />
      <label>Quantity :</label>
      <input
        type="number"
        required
        name="quantity"
        placeholder="enter quantity"
      />
      <label>Image :</label>
      <input type="text" name="image" placeholder="enter image url" />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
