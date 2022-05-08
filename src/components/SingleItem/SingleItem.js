import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleItem = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/cars/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id, car]);

  const handleQuantityDecrement = () => {
    const quantity = car.quantity - 1;
    const url = `http://localhost:5000/cars/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((result) => {});
    toast("Delivered");
  };

  const handleQuantityIncrement = (e) => {
    e.preventDefault();
    const add = e.target.addQuantity.value;
    if (add < 1) {
      toast("Add a valid input");
      return;
    }

    const quantity = parseInt(car.quantity) + parseInt(add);
    const url = `http://localhost:5000/cars/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((result) => {});
    e.target.reset();
    toast("Added");
  };

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
              onClick={handleQuantityDecrement}
              className="btn btn-danger w-50 mt-3"
            >
              Delivered
            </button>
            <form
              onSubmit={handleQuantityIncrement}
              className="input-group mt-3 mb-5 w-75 mx-auto"
            >
              <input
                type="number"
                className="form-control"
                name="addQuantity"
                placeholder="Add quantity"
                aria-label="quantity"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-success"
                  type="submit"
                  id="button-addon2"
                >
                  Restock
                </button>
              </div>
            </form>
            <div className="container text-center mt-5">
              <Link to="/manage">
                <button className="btn btn-dark w-25 py-2">
                  Manage Inventories
                </button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SingleItem;
