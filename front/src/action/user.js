export const UPDATE_LOGIN_INPUT = 'UPDATE_LOGIN_INPUT';
export const SET_LOGGED = 'SET_LOGGED';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export function actionUpdateLoginInput(value, name) {
    return {
        type: UPDATE_LOGIN_INPUT,
        payload: {value, name}
    }
}

export function actionSetLogged(isLogged) {
    return {
        type: SET_LOGGED,
        payload: isLogged
    }
}

export function actionSubmitLogin() {
    return {
        type: SUBMIT_LOGIN
    }
}
