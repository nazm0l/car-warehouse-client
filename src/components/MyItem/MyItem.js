import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import axios from "axios";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `https://jade-frightened-hare.cyclic.app/user?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItem(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
          toast.error(error.message);
        }
      }
    };
    getMyItems();
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `https://jade-frightened-hare.cyclic.app/cars/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myItem.filter((item) => item._id !== id);
          setMyItem(remaining);
        });
      toast("Deleted Successfully");
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
            <tr key={item._id}>
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
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyItem;
