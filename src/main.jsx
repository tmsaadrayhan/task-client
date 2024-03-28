import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword.jsx";
import Main from "./Pages/Layout/Main.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import ResetPassword from "./Pages/ResetPssword/ResetPassword.jsx";
import CreateProject from "./Pages/CreatProject/CreateProject.jsx";
import EditProject from "./Pages/EditProject/EditProject.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "/reset-password/:resetToken",
    element: <ResetPassword></ResetPassword>,
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/create-project",
        element: <CreateProject></CreateProject>,
      },
      {
        path: "/edit-project",
        element: <EditProject></EditProject>,
      },
      {
        path: "/project-view",
        element: <EditProject></EditProject>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
