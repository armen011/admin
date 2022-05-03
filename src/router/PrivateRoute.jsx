import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <Suspense fallback={<div>Loading</div>}>
      <RouteComponent />
    </Suspense>
  );
};

export default PrivateRoute;
