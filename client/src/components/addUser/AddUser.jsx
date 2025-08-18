import "./adduser.css";
import { Link } from "react-router-dom";
export default function AddUser() {
  return (
    <div className="addUser">
      <Link
        to="/"
        style={{ width: "150px", textAlign: "center", fontSize: "1rem" }}
        className="btn"
      >
        <i class="fa-solid fa-backward"></i> Back
      </Link>
      <h3>
        Add New User <i class="fa-solid fa-user"></i>
      </h3>
      <form className="addUserForm">
        {/* NAME FIELD  */}
        <div className="inputGroup">
          <label htmlFor="address">Name:</label>
          <Input
            type="text"
            id="Name"
            name="Name"
            autoComplete="off"
            placeholder="Enter Your Name"
          />
        </div>

        {/* EMAIL FIELD  */}
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter Your Email"
          />
        </div>

        {/* NAME FIELD  */}
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter Your Address"
          />
        </div>

        {/* BUTTON SUBMIT */}
        <div className="inputGroup">
          <Button style={{ width: "200px" }} type={"button"} className="btn">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

function Input({ type = "text", id, name, autoComplete = "off", placeholder }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      autoComplete={autoComplete}
      placeholder={placeholder}
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
