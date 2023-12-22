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
import ToDo from "./DashBoard/ToDo/ToDo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdateTasks from "./DashBoard/UpdateTasks/UpdateTasks";
const queryClient = new QueryClient()
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
      },
      {
        path:"updateTask/:id",
        element: <PrivateRoute><UpdateTasks></UpdateTasks></PrivateRoute>,
        loader: ({params}) => fetch(`https://task-management-a8-server-828aprsaa-habibur-rahmans-projects.vercel.app/task/${params.id}`)
      },
      {
        path:"toDo",
        element: <PrivateRoute><ToDo></ToDo></PrivateRoute>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <div className="max-w-[1200px] mx-auto">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
