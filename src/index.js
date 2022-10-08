import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./components/Login";
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
