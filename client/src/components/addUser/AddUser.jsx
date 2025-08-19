import { useState } from "react";
import "./adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { API_LINK } from "../../utility/config";

export default function AddUser() {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  //Use useState hook for manage the user form data
  const [user, setUser] = useState(users);

  //useNavigate (Router function) use for navigate after sending/post data
  const navigate = useNavigate();

  //Input function  changes for input fileds
  function inputHandler(e) {
    const { name, value } = e.target;
    // console.log(name, value);

    setUser({ ...user, [name]: value });
  }

  // Form submit function to backend
  const submitFunction = async (e) => {
    e.preventDefault();

    await axios
      .post(`${API_LINK}/users`, user)
      .then((response) => {
        // console.log("User create successfully");

        //FOR Toaster Message Print
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="addUser">
      <Link
        to="/"
        style={{ width: "150px", textAlign: "center", fontSize: "1rem" }}
        className="btn"
      >
        <i className="fa-solid fa-backward"></i> Back
      </Link>
      <h3>
        Add New User <i className="fa-solid fa-user"></i>
      </h3>
      <form className="addUserForm" onSubmit={submitFunction}>
        {/* NAME FIELD  */}
        <div className="inputGroup">
          <label htmlFor="address">Name:</label>
          <Input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter Your Name"
            onChange={inputHandler}
          />
        </div>

        {/* EMAIL FIELD  */}
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <Input
            type="text"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter Your Email"
            onChange={inputHandler}
          />
        </div>

        {/* ADDRESS FIELD  */}
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter Your Address"
            onChange={inputHandler}
          />
        </div>

        {/* BUTTON SUBMIT */}
        <div className="inputGroup">
          <Button style={{ width: "200px" }} type="submit" className="btn">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

function Input({
  type = "text",
  id,
  name,
  autoComplete = "off",
  placeholder,
  onChange,
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

function Button({ children, className, style, type = "button" }) {
  return (
    <button style={style} type={type} className={className}>
      {children}
    </button>
  );
}
