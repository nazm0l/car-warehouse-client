import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);

  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/user?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/cars/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myItem.filter((item) => item._id !== id);
          setMyItem(remaining);
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-3">Manage Item</h2>

      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myItem.map((item) => (
            <>
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-link text-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyItem;
