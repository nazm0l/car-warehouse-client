import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleItem = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/cars/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  const handleQuantity = () =>{
      const quantity = car.quantity - 1;
      const url = `http://localhost:5000/cars/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({quantity}),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));

  }

  return (
    <div className="container">
      <div>
        <Card
          className="shadow p-3 my-5 bg-white mx-auto rounded text-center"
          style={{ width: "80%" }}
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
                onClick={handleQuantity}
                className="btn btn-danger w-50 mt-3"
            >
              Delivered
            </button>
            <div className="input-group my-3 w-75 mx-auto">
                <input type="number" className="form-control" placeholder="Add quantity" aria-label="quantity" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" id="button-addon2">Add</button>
                </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SingleItem;