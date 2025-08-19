import React from "react";
import User from "./components/getUser/User";
import AddUser from "./components/addUser/AddUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateUser from "./components/updateUser/UpdateUser";
import Footer from "./components/footer/Footer";
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
      <h1>&lt;The CRUD Data-Base System/&gt;</h1>
      <RouterProvider router={route}></RouterProvider>
      <Footer
        style={{
          marginTop: "2rem",
          padding: "1rem",
          borderTop: "1px solid #ccc",
          fontWeight: 700,
        }}
      >
        <p>
          <a
            style={{ color: "blue" }}
            href="mailto:apurbadutta2099@gmail.com.com"
          >
            apurbadutta
          </a>
          ©{new Date().getFullYear()}. All rights reserved.
        </p>
      </Footer>
    </div>
  );
}
