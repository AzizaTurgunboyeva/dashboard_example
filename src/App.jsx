import React, { Fragment } from "react";

import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Users from "./pages/Users";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFounpage";
import Products from "./pages/Products";

function App() {
  return (
    <Fragment>
      <Routes>
      
          <Route path="/dashboard" element={<Dashboard />} >

          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="counter" element={<Counter />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
