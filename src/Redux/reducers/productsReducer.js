import { ActionTypes } from "../constants/action-types";

const intialState = {
  products: [],
  cart: [],
};
const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, cartProducts: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, cartProducts: {} };
    case ActionTypes.SET_CART_ITEMS:
      return { ...state, cart: [...state.cart, payload] }
    case ActionTypes.SET_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: payload }
    default:
      return state;
  }
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.REGISTER_START:
    case ActionTypes.LOGIN_START:
    case ActionTypes.LOGOUT_START:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      }
    case ActionTypes.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      }
    case ActionTypes.AUTHENTICATED_USER:
      return {
        ...state,
        currentUser: payload,
      }
    case ActionTypes.REGISTER_SUCCESS:
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      };
    case ActionTypes.REGISTER_FAIL:
    case ActionTypes.LOGIN_FAIL:
    case ActionTypes.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state;
  }
};

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//       return {};
//     default:
//       return state;
//   }
// };
