import React from "react";
import User from "./components/getUser/User";
import AddUser from "./components/addUser/AddUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {
  //Routing the client side
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
  ]);
  return (
    <div className="container">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}
