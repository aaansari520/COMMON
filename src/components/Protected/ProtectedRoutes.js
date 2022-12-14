import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  const hasAuthToken = localStorage.getItem("authToken");
  return (
    <Route
      {...rest}
      render={(props) =>
        hasAuthToken ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
