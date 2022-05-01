import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    <p>Loading...</p>;
  }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-danger">{error?.message}</p>;
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">more</p>
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
      </div>
      {errorMessage}
      <div className="mx-auto">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-dark px-3 d-block mx-auto"
        >
          SignIn with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
