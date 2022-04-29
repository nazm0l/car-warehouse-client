import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name, email, password);
  };

  return (
    <div className="container">
      <h2 className="text-center fw-bold my-5">Register Now</h2>
      <div className="dw-25 mw-80 mx-auto">
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control name="name" type="text" placeholder="Name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email address"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button className="w-100 fw-bold" variant="dark" type="submit">
            Register
          </Button>
        </Form>
        <p className="mt-3">
          Already Registered?{" "}
          <Link to="/login" className="text-primary text-decoration-none">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
