import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';

import Root from "./routes/Root";
import Settings from "./routes/Settings";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/settings/",
    element: <Settings/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);