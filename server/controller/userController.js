//for handling for the request and for processing the data and generating the responses

import User from "../model/userModel.js";

//POST
//***That’s a controller function for your Create Post/api/user route.***
export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });

    //If user exist
    if (userExist) {
      return res.status(400).json({ message: "User allready exists!" });
    }

    //If user does'not exist
    const saveData = await newUser.save();
    //Sending data!
    res.status(200).json(saveData); //200 OK Status
  } catch (error) {
    res.status(500).json({
      errorMessage: error.message,
    });
  }
};

//GET
//***That’s a controller function for your GET /api/user route.***
export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();

    //if not found! like guard clause!
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User data not found!" });
    }

    // if found the data which retrive from the database
    //Sending data!
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

//GET
//***That’s a controller function for your GET by there User ID /api/user/:id route.***
export const getAllUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    //User Exist or not
    if (!userExist) {
      return res.status(404).json({ message: "User not found!" });
    }

    //IF it found!
    //Sending data!
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

//PUT
// *** Controller function for updating a user by ID (PUT /api/users/:id) ***
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    //IF User Not Exist
    if (!userExist) {
      return res
        .status(404)
        .json({ message: "User not found, update not be done!" });
    }

    //IF it found!
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true, //Its basically specify that the function should return updated document rather than the original one!

      // ( return updated user instead of old one)
    });

    //Sending data!
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE
// *** Controller function for Deleting data user by ID (PUT /api/users/:id) ***

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    //IF not delete user or not found!
    if (!userExist) {
      return res
        .status(404)
        .json({ message: "User not found, delete failed!" });
    }
    //If got the User
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

