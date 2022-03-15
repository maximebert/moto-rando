import {
  actionSetErrorConnection,
  actionSetLogged,
  actionsSetPseudo,
  SET_LOGOUT,
  SUBMIT_LOGIN,
} from "../action/user";
import { requestLogin } from "../request/loginRequest";
import {setBearerToken, initBearerToken, removeBearerToken } from '../request/index'
import { APP_MOUNT } from '../action/system'

//loginMiddleware  va capturer la requete login
const loginMiddleware = (store) => (next) => async (action) => {
  // si l'action SUBMIT_LOGIN est récupéré on fait la requete
  switch (action.type) {
    case APP_MOUNT: {
      const res = initBearerToken();
      if(res) {
        store.dispatch(actionSetLogged(true, res.data.id));
        store.dispatch(actionsSetPseudo(res.data.alias));
      }
      next(action);
      return;
    }

    case SUBMIT_LOGIN: {
      const { user } = store.getState();
      const response = await requestLogin(user.email, user.password);
      console.log("requestLogin", response);
      // si le status de la reponse est bien = à 200 alors l'utilisateur est connecté et on affiche son pseudo
      if (response.status === 200) {
        store.dispatch(actionSetLogged(true, response.data.id));
        store.dispatch(actionsSetPseudo(response.data.alias));
        setBearerToken(response.data.accessToken)
        initBearerToken()
      } else {
        store.dispatch(actionSetLogged(false));
        store.dispatch(actionSetErrorConnection(response.data));
      }
      return;
    }

    case SET_LOGOUT: {

      removeBearerToken()
      next(action)
      break;
    }
    default:
      next(action);
  }
};

export default loginMiddleware;
