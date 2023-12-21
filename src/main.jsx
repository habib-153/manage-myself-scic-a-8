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
import Dashboard from "./DashBoard/Dashboard/Dashboard";
import PrivateRoute from "./Component/PrivetRoute/PrivateRoute";
import Tasks from "./DashBoard/Tasks/Tasks";
import AddTasks from "./DashBoard/AddTasks/AddTasks";

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
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:"tasks",
        element: <PrivateRoute><Tasks></Tasks></PrivateRoute>,
      },
      {
        path:"addTask",
        element: <PrivateRoute><AddTasks></AddTasks></PrivateRoute>,
      }
    ]
  }
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
