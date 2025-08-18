import React from "react";
import User from "./components/getUser/User";
import AddUser from "./components/addUser/AddUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateUser from "./components/updateUser/UpdateUser";
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
    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
  ]);
  return (
    <div className="container">
      <h1>&lt;The CURD Data-Base System/&gt;</h1>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}
