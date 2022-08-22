import React from "react";
import Biodata from "./Biodata";

const BioDataList = ({ users, onView, onEdit, onDelete }) => {
  const handleView = (user) => () => {
    onView(user);
  };
  const handleEdit = (user) => () => {
    onEdit(user);
  };
  const handleDelete = (id) => () => {
    onDelete(id);
  };

  return (
    <>
      <table className="table table-sm table-striped table-responsive">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handleEdit(user)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{ background: "#f00" }}
                    onClick={handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={handleView(user)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Biodata />
    </>
  );
};

export default BioDataList;
