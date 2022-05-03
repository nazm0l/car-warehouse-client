import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Items = ({ car }) => {
  const { name, price, picture, description, quantity, supplier, _id } = car;
  const navigate = useNavigate();

  const updateCar = (_id) =>{
      navigate(`/inventory/${_id}`)
  }

  return (
    <div className="col-md-3 my-2">
      <Card className="shadow p-3 mb-3 bg-white mx-auto rounded" style={{ width: "18rem"}}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><strong>Price:</strong> {price}</ListGroupItem>
          <ListGroupItem><strong>Supplier:</strong> {supplier}</ListGroupItem>
          <ListGroupItem><strong>Quantity:</strong> {quantity}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <button onClick={()=>updateCar(_id)} className="btn btn-dark w-100">Update</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Items;
