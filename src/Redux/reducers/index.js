import { combineReducers } from "redux";
import { productsReducer, userReducer } from "./productsReducer";
import { orderDetailsReducer } from "./orderDetailsReducer";

const reducers = combineReducers({

  user: userReducer,
  allProducts: productsReducer,
  orderDetails: orderDetailsReducer,
  // product: selectedProductsReducer,
});
export default reducers;
