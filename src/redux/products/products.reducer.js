const INITIAL_STATE = {
  currentProducts: [
    {
      name: "Random1",
      description: "This is the Description",
      price: 20,
      quantity: 2,
      image: "https://picsum.photos/200",
    },
    {
      name: "Random2",
      description: "This is the Description",
      price: 20,
      quantity: 2,
      image: "https://picsum.photos/200",
    },
    {
      name: "Random3",
      description: "This is the Description",
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
