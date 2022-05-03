import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "pages/not-found";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

const isAuth = true;

const SignIn = lazy(() =>
  import(/* webpackChunkName: "Home-Page" */ "pages/sign-in")
);

const Dashboard = lazy(() =>
  import(/* webpackChunkName: "Home-Page" */ "pages/dashboard")
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<RestrictedRoute isAuth={isAuth} component={SignIn} />}
      />

      <Route
        path="/"
        element={<PrivateRoute isAuth={isAuth} component={Dashboard} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
