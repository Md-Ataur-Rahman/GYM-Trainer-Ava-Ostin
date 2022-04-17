import React from "react";
import { Link } from "react-router-dom";
import SocialBtn from "../SocialBtn/SocialBtn";
const Login = () => {
  return (
    <div className="form-container">
      <h3 className="form-title">Login</h3>
      <form>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
      <button
        className="btn btn-link"
        style={{ color: "black", textDecoration: "none" }}
      >
        Reset Password
      </button>
      <SocialBtn />
      <p className="text-center pt-2">
        Create New An Account
        <Link className="text-dark px-2" to="/registration">
          Registration
        </Link>
      </p>
    </div>
  );
};

export default Login;
