import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

import AuthProvider from "./Providers/AuthProvider";
import Dashboard from "./Layout/Dashboard";
//
import Private from "./Layout/Private";
import AllUsers from "./Pages/Dashboard/AllUsers/AllUsers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Registration from "./Pages/Registration/Registration";
import OrderPackge from "./Pages/Dashboard/OrderPackge/OrderPackge";
import Message from "./Pages/Dashboard/Message/Message";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <Private>
        <Dashboard></Dashboard>
      </Private>
    ),
    children: [
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "Order-packge",
        element: <OrderPackge></OrderPackge>,
      },
      {
        path: "message",
        element: <Message></Message>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
