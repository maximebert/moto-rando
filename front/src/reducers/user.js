import {
  SET_LOGGED,
  UPDATE_LOGIN_INPUT,
  SET_LOGOUT,
  SET_PSEUDO,
} from "../action/user";

export const initialState = {
  email: "maxime@gmail.com",
  password: "",
  pseudo: "",
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case SET_LOGGED:
      return {
        ...state,
        logged: action.payload,
      };
    case SET_LOGOUT:
      return {
        ...state,
        email: initialState.email,
        password: initialState.password,
        pseudo: initialState.pseudo,
        logged: false,
      };
    case SET_PSEUDO:
      return {
        ...state,
        pseudo: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
