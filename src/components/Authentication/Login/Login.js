import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
      navigate('/')
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center my-3">Login</h2>
      <div className="dw-25 mw-80 mx-auto">
        <Form onSubmit={handleSubmit}>
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
            Login
          </Button>
        </Form>

        <p className="mt-3">
          <Link to="/reset" className="text-danger text-decoration-none">
            Forgotten password?
          </Link>
        </p>

        <p className="mt-3">
          New Here?{" "}
          <Link to="/register" className="text-primary text-decoration-none">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
