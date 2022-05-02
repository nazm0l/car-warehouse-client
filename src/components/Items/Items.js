import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Items = ({ car }) => {
  const { name, price, picture, description, quantity, supplier } = car;
  return (
    <div className="col-md-3 my-4">
      <Card className="shadow p-3 mb-5 bg-white rounded" style={{ width: "18rem"}}>
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
          <button className="btn btn-dark w-100">Update</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Items;
