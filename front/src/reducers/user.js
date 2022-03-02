import {SET_LOGGED, UPDATE_LOGIN_INPUT} from "../action/user";

export const initialState = {
    email: '',
    password: '',
    pseudo: '',
    logged: false,
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_LOGIN_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case SET_LOGGED:
            return {
                ...state,
                logged: action.payload
            }
        default:
            return state;
    }
}

export default reducer;

