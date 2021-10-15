import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, signInUsingFacebook } = useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle} className="btn btn-outline-info">
        Google Sign In
      </button>
      <button
        onClick={signInUsingFacebook}
        className="btn btn-outline-success mx-2"
      >
        FaceBook Login
      </button>
    </div>
  );
};

export default Login;
