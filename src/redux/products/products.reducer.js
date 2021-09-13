const INITIAL_STATE = {
  currentProducts: [
    {
      name: "Item1",
      description: "This is the description...",
      price: 20,
      quantity: 2,
      image: "https://picsum.photos/200",
    },
    {
      name: "Random1",
      description: "This is the description...",
      price: 20,
      quantity: 2,
      image: "https://picsum.photos/200",
    },
    {
      name: "Product1",
      description: "This is the description...",
      price: 20,
      quantity: 2,
      image: "https://picsum.photos/200",
    },
  ],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_PRODUCTS":
      return {
        ...state,
        currentProducts: [...state.currentProducts, action.payload],
      };

    default:
      return state;
  }
};

export default productsReducer;
