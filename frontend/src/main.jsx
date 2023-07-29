import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/pages/Home";
import Registration from "./components/pages/Registration";
import Login from "./components/pages/Login";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/home/:username",
    element: <Home />,
  },
  {
    path: "/",
    element: <Registration />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
