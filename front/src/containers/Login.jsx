import React from 'react';
import Login from "../Components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {actionSetLogout, actionSubmitLogin, actionUpdateLoginInput} from "../action/user";

const LoginContainer = () => {
    const dispatch = useDispatch();

    const email = useSelector((state) => state.user.email);
    const password = useSelector((state) => state.user.password);
    const isLogged = useSelector((state) => state.user.logged);
    const pseudo = useSelector((state)=> state.user.pseudo)

    const changeField = (value, name) => {
        dispatch(actionUpdateLoginInput(value, name))
    };

    const handleLogin = () => {
        dispatch(actionSubmitLogin());

    }

    const handleLogout = ()=>{
      dispatch(actionSetLogout());
    }
  return (
      <Login
        email={email}
        password={password}
        isLogged={isLogged}
        changeField={changeField}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        pseudo={pseudo}
      />
  )
}

export default React.memo(LoginContainer);