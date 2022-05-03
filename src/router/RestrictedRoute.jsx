import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component: RouteComponent, isAuth }) => {
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <Suspense fallback={<div>Loading</div>}>
      <RouteComponent />
    </Suspense>
  );
};

export default RestrictedRoute;
