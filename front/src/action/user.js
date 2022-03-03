export const UPDATE_LOGIN_INPUT = "UPDATE_LOGIN_INPUT";
export const SET_LOGGED = "SET_LOGGED";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
export const SET_PSEUDO = "SET_PSEUDO";

/**
 * fonction que l'on exporte, c'est l'action pour mettre à jour la valeur des champs email et password
 * @param {string} value
 * @param {string} name
 * @returns
 */
export function actionUpdateLoginInput(value, name) {
  return {
    type: UPDATE_LOGIN_INPUT,
    payload: { value, name },
  };
}
/**
 * c'est l'action pour savoir si l'utilisateur est connecté
 * @param {bool} isLogged
 * @returns
 */
export function actionSetLogged(isLogged) {
  return {
    type: SET_LOGGED,
    payload: isLogged,
  };
}

export function actionSubmitLogin() {
  return {
    type: SUBMIT_LOGIN,
  };
}

export function actionSetLogout() {
  return {
    type: SET_LOGOUT,
  };
}

export function actionsSetPseudo(pseudo) {
  return {
    type: SET_PSEUDO,
    payload: pseudo,
  };
}
