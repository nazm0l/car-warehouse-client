import React from "react";
import useCars from "../../hooks/useCars";

const Manage = ({car}) => {

    const {name, price, quantity, _id} = car;
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
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <button onClick={()=>handleDelete(_id)} className="btn btn-link text-danger">Delete</button>
      </tr>
    </>
  );
};

export default Manage;
