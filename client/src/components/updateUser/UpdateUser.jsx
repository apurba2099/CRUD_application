import { useEffect, useState } from "react";
import "./updateuser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { API_LINK } from "../../utility/config";

export default function UpdateUser() {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  //Use useState hook for manage the user form data
  const [user, setUser] = useState(users);

  //useNavigate (Router function) use for navigate after sending/post data
  const navigate = useNavigate();

  //The hook useParams is used to read dynamic parameters from the URL.
  const { id } = useParams();

  //Input function  changes for input fileds
  function inputHandler(e) {
    const { name, value } = e.target;
    // console.log(name, value);

    setUser({ ...user, [name]: value });
  }

  //Set up the dynamic user id in the URL
  useEffect(() => {
    axios
      .get(`${API_LINK}/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]); // [id] dependecy's array means its just one time called!

  // Form submit function to backend
  const submitFunction = async (e) => {
    e.preventDefault();
    // http://localhost:8000/api/users/${id}
    await axios
      .put(`${API_LINK}/users/${id}`, user)
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
        <i className="fa-solid fa-backward"></i>Back
      </Link>
      <h3>
        Update User <i className="fa-solid fa-user"></i>
      </h3>
      <form className="addUserForm" onSubmit={submitFunction}>
        {/* NAME FIELD  */}
        <div className="inputGroup">
          <label htmlFor="address">Name:</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={user.name}
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
            value={user.email}
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
            value={user.address}
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
  value,
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
      value={value}
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
