import React, { useEffect, useState } from "react";
import Items from "../Items/Items";

const Inventory = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <div className="row mx-auto container">
      {
          cars.map(car => <Items key={car._id} car={car}></Items>)
      }
      </div>
    </div>
  );
};

export default Inventory;