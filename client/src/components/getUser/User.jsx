import React from "react";
import "./user.css";

export default function User() {
  return (
    <div className="userTable">
      <Button className="btn" btnTxt="Add Users" />
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
          <tr className="table-row">
            <td className="data">1</td>
            <td className="data">Apurba Dutta</td>
            <td className="data">apurbadutta2099@gmail.com</td>
            <td className="data">741247, Payradanga</td>
            <td className="data">
              <div className="action-btn">Update | Delete</div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="table-row">
            <td className="data">1</td>
            <td className="data">Apurba Dutta</td>
            <td className="data">apurbadutta2099@gmail.com</td>
            <td className="data">741247, Payradanga</td>
            <td className="data">
              <div className="action-btn">Update | Delete</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Button({ btnTxt, className }) {
  return <button className={className}>{btnTxt}</button>;
}
