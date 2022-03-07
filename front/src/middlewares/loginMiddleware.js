import {
  actionSetErrorConnection,
  actionSetLogged,
  actionsSetPseudo,
  SUBMIT_LOGIN,
} from "../action/user";
import { requestLogin } from "../request/loginRequest";

//loginMiddleware  va capturer la requete login
const loginMiddleware = (store) => (next) => async (action) => {
  // si l'action SUBMIT_LOGIN est récupéré on fait la requete
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { user } = store.getState();
      const response = await requestLogin(user.email, user.password);
      console.log("requestLogin", response);
      // si le status de la reponse est bien = à 200 alors l'utilisateur est connecté et on affiche son pseudo
      if (response.status === 200 && response.data.id) {
        store.dispatch(actionSetLogged(true, response.data.id));
        store.dispatch(actionsSetPseudo(response.data.alias));
      } else {
        store.dispatch(actionSetErrorConnection(response.data));
      }
      return;
    }
    default:
      next(action);
  }
};

export default loginMiddleware;
