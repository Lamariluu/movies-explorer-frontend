import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ component: Component, ...props }) => {
  return props.isLogged ? <Component {...props} replace /> : <Navigate to="/" replace />;
};

export default ProtectedRouteElement;
