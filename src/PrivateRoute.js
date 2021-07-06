import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAccessToken } from "src/Utils/localStorageUtil";
import { PATH } from "src/constants/path";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAccessToken() ? <Component {...props} /> : <Redirect to={PATH.HOME} />
      }
    />
  );
};

export default PrivateRoute;
