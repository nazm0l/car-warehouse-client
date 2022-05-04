import React from "react";
import { Table } from "react-bootstrap";
import useCars from "../../hooks/useCars";
import Manage from "../Manage/Manage";

const ManageItem = () => {
  const [cars] = useCars();

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
          {cars.map((car) => (
            <Manage key={car._id} car={car}></Manage>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageItem;
