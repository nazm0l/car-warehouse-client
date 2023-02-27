import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  let from = location.state?.from?.pathname || "/";
  const [user1] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-danger">{error?.message}</p>;
  }

  if (user1) {
    console.log(user1.email);
    const url = `https://jade-frightened-hare.cyclic.app/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user1.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
      });
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
          {errorMessage}
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
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
