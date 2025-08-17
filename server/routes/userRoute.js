//Define the endpoint of the application and also map them to the specific controller method,

import express from "express";
//Importing from the userController all routing export function!
import {
  create,
  getAllUserById,
  getAllUsers,
  remove,
  update,
} from "../controller/userController.js";

const route = express.Router();

//Routing Path!
route.post("/users", create);
route.get("/users", getAllUsers);
route.get("/users/:id", getAllUserById);
route.put("/users/:id", update);
route.delete("/users/:id", remove);

export default route;
