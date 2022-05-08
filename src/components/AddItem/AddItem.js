import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {

  const [user] = useAuthState(auth);
  const handleAddItem = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const supplier = e.target.supplier.value;
    const quantity = e.target.quantity.value;
    const picture = e.target.picture.value;
    const data = {
        name: name,
        picture: picture,
        description: description,
        price: price,
        supplier: supplier,
        quantity: quantity,
        email: user.email
    }

    fetch('https://salty-wave-00950.herokuapp.com/cars', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
        toast("New Car Added")

    e.target.reset();
  };

  return (
    <div className="container">
      <h2 className="text-center my-3">Add Item</h2>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleAddItem}>
            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control name="picture" type="text" placeholder="Image URL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control name="name" type="text" placeholder="Item Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
                name="description"
                type="text"
                placeholder="Description"
                required
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
                name="price"
                type="number"
                placeholder="Price"
                required
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
                name="supplier"
                type="text"
                placeholder="Supplier"
                required
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
                name="quantity"
                type="number"
                placeholder="Quantity"
                required
            />
            </Form.Group>

            <Button className="w-100 fw-bold" variant="dark" type="submit">
            Add Item
            </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddItem;
