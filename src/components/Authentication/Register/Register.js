import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate('/');
  };

  return (
    <div className="container">
      <h2 className="text-center fw-bold my-5">Register Now</h2>
      <div className="dw-25 mw-80 mx-auto">
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicText">
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
