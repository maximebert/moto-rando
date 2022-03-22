import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import App from "../Components/App/App";
import { actionAppMount } from "../action/system";

const AppContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionAppMount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <App />;
};

export default React.memo(AppContainer);
