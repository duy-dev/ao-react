import AuthLayout from "@/layouts/auth-layout";
import MainLayout from "@/layouts/main-layout";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { IRouter, listRouterAuth, listRouterMain } from "./config";

const Router: React.FC = () => {
  const renderRoutes = (routes: IRouter[]) =>
    routes.map(({ component: Component, ...options }, index) => {
      return (
        <Route
          key={index}
          path={options.path}
          element={
            <React.Suspense fallback={<>...loading</>}>
              <Component />
            </React.Suspense>
          }
        />
      );
    });

  return (
    <Routes>
      <Route element={<AuthLayout />}>{renderRoutes(listRouterAuth)}</Route>
      <Route element={<MainLayout />}>{renderRoutes(listRouterMain)}</Route>
    </Routes>
  );
};

export default Router;
