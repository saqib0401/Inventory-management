import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import productsReducer from "./products/products.reducer";
import loginReducer from "./login/login.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "products"],
};

const rootReducer = combineReducers({
  products: productsReducer,
  login: loginReducer,
});

export default persistReducer(persistConfig, rootReducer);
