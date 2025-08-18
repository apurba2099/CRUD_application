import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []); // At the end set this: [] cause the useEffect run only one!
  return (
    <div className="userTable">
      <Link to="/add" className="btn">
        Add User <i className="fa-solid fa-user-plus"></i>
      </Link>
      {/* Table heading */}
      <table className="table">
        <thead>
          <tr>
            <th className="heading" scope="col">
              S.No.
            </th>
            <th className="heading" scope="col">
              Name
            </th>
            <th className="heading" scope="col">
              Email
            </th>
            <th className="heading" scope="col">
              Address
            </th>
            <th className="heading" scope="col">
              Action
            </th>
          </tr>
        </thead>

        {/* Table body data */}
        <tbody>
          {users.map((user, index) => {
            return (
              <tr className="table-row" key={user.email}>
                <td className="data">{index + 1}</td>
                <td className="data">{user.name}</td>
                <td className="data">{user.email}</td>
                <td className="data">{user.address}</td>
                <td className="data">
                  <div className="action-box">
                    <Button
                      className="action-btn"
                      style={{ background: "lightGreen" }}
                      type="button"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    |
                    <Button
                      className="action-btn"
                      style={{ background: "red" }}
                      type="button"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Button({ children, className, style, type = "button" }) {
  return (
    <button style={style} className={className} type={type}>
      {children}
    </button>
  );
}
