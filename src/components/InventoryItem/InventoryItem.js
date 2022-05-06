import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useCars from "../../hooks/useCars";

const InventoryItem = () => {
  const [cars] = useCars();
  const navigate = useNavigate();

  const updateCar = (_id) =>{
      navigate(`/inventory/${_id}`)
  }

  return (
    <div>
      <h2 className="text-center my-3">Inventory Item</h2>
      <div className="row container mx-auto">
        {cars.slice(0, 6).map((car) => (
            <div key={car._id} className="col-md-4 my-2" >
              <Card
                className="shadow p-3 mb-3 bg-white mx-auto rounded"
                style={{ width: "22rem" }}
              >
                <Card.Img variant="top" src={car.picture} />
                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Text>{car.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <strong>Price:</strong> {car.price}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Supplier:</strong> {car.supplier}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Quantity:</strong> {car.quantity}
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <button
                    onClick={()=>updateCar(car._id)}
                    className="btn btn-dark w-100"
                  >
                    Update
                  </button>
                </Card.Body>
              </Card>
            </div>
        ))}
      <div className="container text-center mt-4">
        <Link to='/manage'><button className="btn btn-dark w-25 py-2">Manage Inventories</button></Link>
      </div>
      </div>
    </div>
  );
};

export default InventoryItem;
