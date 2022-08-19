import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      {isAuth ? (
        <>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
