import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home/Home";
import { Toaster } from "react-hot-toast";
import Main from "./LayOut/Main";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Login/Login";
import { HelmetProvider } from "react-helmet-async";
import Register from "./Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element: <Register></Register>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <div className="max-w-[1200px] mx-auto">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
