import React from "react";
import { Button, Form } from "react-bootstrap";

const ForgetPassword = () => {
  const handleReset = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(email);
  };

  return (
    <div className="container">
        <h2 className="text-center my-5">Reset Password</h2>
      <div className="dw-25 mw-80 mx-auto">
      <Form onSubmit={handleReset}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email address"
            required
          />
        </Form.Group>
        <Button className="w-100 fw-bold" variant="dark" type="submit">
          Reset
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
