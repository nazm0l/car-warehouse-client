import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCars from "../../hooks/useCars";
import Loading from "../Shared/Loading/Loading";

const ManageItem = () => {
  const [cars, setCars] = useCars();

  const handleDelete = (id) =>{

    const proceed = window.confirm('Are you sure?')

    if(proceed){
        const url = `http://localhost:5000/cars/${id}`
        
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remaining = cars.filter(car => car._id !== id);
            setCars(remaining);
        })
    }
}
if(!cars.length){
  return <Loading></Loading>
}
  
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
             <tr key={car._id}>
               <td>{car.name}</td>
               <td>{car.price}</td>
               <td>{car.quantity}</td>
               <td><button onClick={()=>handleDelete(car._id)} className="btn btn-link text-danger">Delete</button></td>
             </tr>
          ))}
        </tbody>
      </Table>
      <div className="container text-center mt-4">
        <Link to='/additem'><button className="btn btn-dark w-25 py-2">Add new item</button></Link>
      </div>
    </div>
  );
};

export default ManageItem;
