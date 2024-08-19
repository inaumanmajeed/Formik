import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("app/containers/home/index"));
const ShowOrUpdate = lazy(() => import("app/containers/home/ShowOrUpdate"));

const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/update"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ShowOrUpdate />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default RoutesMain;
