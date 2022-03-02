import {actionSetLogged, SUBMIT_LOGIN} from "../action/user";
import {requestLogin} from "../request/loginRequest";

const loginMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case SUBMIT_LOGIN: {

            const { user } = store.getState();
            const response = await requestLogin(user.email, user.password, user.confirmPassword);

            if(response.status === 200 && response.data.logged) {
                store.dispatch(actionSetLogged(true))
            } else {
                store.dispatch(actionSetLogged(false))
            }
            return;
        }
        default:
            next(action);
    }
}

export default loginMiddleware;
