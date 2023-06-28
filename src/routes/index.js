import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Componets/Navbar";
const Restaurant = lazy(() => import("../Pages/Restaurant"));
const Instamart = lazy(() => import("../Pages/instamart"));

const AppRoutes = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/insta"
          element={
            <Suspense fallback={<>...</>}>
              <Instamart />
            </Suspense>
          }
        />
        <Route
          path="/restaurant/details/:id"
          element={
            <Suspense fallback={<>...</>}>
              <Restaurant />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
