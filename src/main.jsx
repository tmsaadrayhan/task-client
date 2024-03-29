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
import ProjectView from "./Pages/ProjectView/ProjectView.jsx";
import Tasks from "./Pages/Tasks/Tasks.jsx";
import CreateTask from "./Pages/CreateTask/CreateTask.jsx";
import EditTask from "./Pages/EditTask/EditTask.jsx";
import Overview from "./Pages/Overview/Overview.jsx";

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
        path: "/overview",
        element: <Overview></Overview>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        // Create Project 
        path: "/create-project",
        element: <CreateProject></CreateProject>,
      },
      
      {
        // Edit Project
        path: "/edit-project",
        element: <EditProject></EditProject>,
      },
      {
        path: "/project-view",
        element: <ProjectView></ProjectView>,
      },
      {
        path: "/tasks",
        element: <Tasks></Tasks>,
      },
      {
        // Create Task
        path: "/create-tasks",
        element: <CreateTask></CreateTask>,
      },
      {
        // Edit Task
        path: "/edit-tasks",
        element: <EditTask></EditTask>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
