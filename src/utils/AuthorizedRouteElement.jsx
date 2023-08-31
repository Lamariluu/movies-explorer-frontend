import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthorizedRouteElement = ({ component: Component, ...props }) => {
  return props.isLogged ? <Navigate to="/" replace /> : <Component {...props} replace />;
};

export default AuthorizedRouteElement;
