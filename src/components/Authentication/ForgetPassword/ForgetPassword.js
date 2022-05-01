import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ForgetPassword = () => {

  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );

  const handleReset = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast('Reset mail sent');
  };

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-danger">{error?.message}</p>;
  }

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
        {errorMessage}
        <Button className="w-100 fw-bold" variant="dark" type="submit">
          Reset
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
