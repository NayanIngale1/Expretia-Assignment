import {
  SET_LOADING,SET_USER, SET_USER_ERROR, REMOVE_USER,SET_UPDATE_USER
} from "./actions.js";


const initial = {
  loading: false,
  error: false,
  user: {},
  token: "",
  isLoggedIn: false,
};

export const userReducer = (state = initial, { type, payload }) => {
 
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_USER_ERROR:
      return { ...state, loading: false, error: payload };
    case SET_USER:
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        user: payload.user,
      };
    case SET_UPDATE_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case REMOVE_USER:
      return { ...state, isLoggedIn: false, token: "", user: {} };
    default:
      return { ...state };
  }
};
