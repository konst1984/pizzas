import React, { Suspense } from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import "./scss/app.scss";
import { Outlet, Route, Routes } from "react-router-dom";

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ "./pages/Cart/Cart")
);
const FullPizza = React.lazy(
  () =>
    import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza/FullPizza")
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound/NotFound")
);

const App = () => {
  return (
    <Routes>
      <Route path="/pizzas" element={<Layout />}>
        <Route path="/pizzas" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
