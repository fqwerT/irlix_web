import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root") as HTMLElement;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
