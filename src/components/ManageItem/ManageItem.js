import React from "react";
import { Table } from "react-bootstrap";
import useCars from "../../hooks/useCars";

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
             <>
             <tr>
               <td>{car.name}</td>
               <td>{car.price}</td>
               <td>{car.quantity}</td>
               <td><button onClick={()=>handleDelete(car._id)} className="btn btn-link text-danger">Delete</button></td>
             </tr>
           </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageItem;
