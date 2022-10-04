import { ActionTypes } from "../constants/action-types";
import { auth} from "../../firebase";


export const registerStart = () => ({
  type: ActionTypes.REGISTER_START,
});

export const registerSuccess = (user) => ({
  type: ActionTypes.REGISTER_SUCCESS,
  payload: user,
});

export const registerFail = (error) => ({
  type: ActionTypes.REGISTER_FAIL,
  payload: error,
});

export const loginStart = () => ({
  type: ActionTypes.LOGIN_START,
});

export const loginSuccess = (user) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const authenticatedUser = (user) => ({
  type: ActionTypes.AUTHENTICATED_USER,
  payload: user,
});

export const loginFail = (error) => ({
  type: ActionTypes.LOGIN_FAIL,
  payload: error,
});

export const logoutStart = () => ({
  type: ActionTypes.LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: ActionTypes.LOGOUT_SUCCESS,
});

export const logoutFail = (error) => ({
  type: ActionTypes.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: ActionTypes.SET_USER,
  payload: user,
});


export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const cartProduct = (product) => {
  return {
    type: ActionTypes.CART_PRODUCT,
    payload: product,
  }
}
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const setCartData = (product) => {
  return {
    type: ActionTypes.SET_CART_ITEMS,
    payload: product
  };
};

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
      dispatch(registerStart());
      auth.createUserWithEmailAndPassword(email, password).then(({ user }) => {
          user.updateProfile({
              displayName,
          });
          dispatch(registerSuccess(user));
      })
          .catch((error) => dispatch(registerFail(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
      dispatch(loginStart());
      auth
          .signInWithEmailAndPassword(email, password)
          .then(({ user }) => {
              dispatch(loginSuccess(user));
              dispatch(authenticatedUser(user));
          })
          .catch((error) => dispatch(loginFail(error.message)));
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
      dispatch(logoutStart());
      auth
          .signOut()
          .then((resp) =>
              dispatch(logoutSuccess()))
          .catch((error) => dispatch(logoutFail(error.message)));
  };
};