import React from 'react';
import Login from "../Components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {actionSubmitLogin, actionUpdateLoginInput} from "../action/user";

const LoginContainer = () => {
    const dispatch = useDispatch();

    const email = useSelector((state) => state.user.email);
    const password = useSelector((state) => state.user.password);
    const confirmPassword = useSelector((state) => state.user.confirmPassword);

    const isLogged = useSelector((state) => state.user.logged);

    const changeField = (value, name) => {
        dispatch(actionUpdateLoginInput(value, name))
    };

    const handleLogin = () => {
        dispatch(actionSubmitLogin());
    }

  return (
      <Login
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        isLogged={isLogged}
        changeField={changeField}
        handleLogin={handleLogin}
      />
  )
}

export default React.memo(LoginContainer);
