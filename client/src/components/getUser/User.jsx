import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./user.css";

import { API_LINK } from "../../utility/config";
// console.log(API_LINK);

export default function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_LINK}/users`);
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []); // At the end set this: [] cause the useEffect run only one!

  //Delete User data Axios Delete function
  const deleteUser = async (userID) => {
    await axios
      .delete(`${API_LINK}users/${userID}`)
      .then((response) => {
        //This Code basically remove the user from the list of users by checking the user id comparing with the provided user id.
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userID));
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="userTable">
      <Link to="/add" className="btn">
        Add User <i className="fa-solid fa-user-plus"></i>
      </Link>

      {/* Conditional Rendering */}
      {users.length === 0 ? (
        <div className="table">
          <h3>No Data to display!</h3>
          <p className="para">Pleas add New User👤</p>
        </div>
      ) : (
        <>
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
                        {/* ROUTE THE UPDATE USER_ID  */}
                        <Link
                          to={`/update/` + user._id}
                          className="action-btn"
                          style={{
                            background: "lightGreen",
                            textDecoration: "none",
                            color: "#000",
                          }}
                          type="button"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                        |
                        <Button
                          className="action-btn"
                          style={{ background: "red" }}
                          type="button"
                          onClick={() => deleteUser(user._id)}
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
        </>
      )}
    </div>
  );
}

function Button({ children, className, style, type = "button", onClick }) {
  return (
    <button style={style} className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
