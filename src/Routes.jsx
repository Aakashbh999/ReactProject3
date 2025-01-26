import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import NotFound from "./Component/NotFound";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Edit from "./Component/Admin/Edit";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
        children: [
          {
            path: "service",
            element: <Service />,
          },
        ],
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
        children: [
          {
            path: "edit",
            element: <Edit />,
          },
        ],
      },
    ],
  },
]);
router;
