import React from "react";
import { Link } from "react-router-dom";
import SocialBtn from "../SocialBtn/SocialBtn";
import "./Registration.css";
const Registration = () => {
  return (
    <div className="form-container">
      <h3 className="form-title">Registration</h3>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Registration" />
      </form>
      <SocialBtn />
      <p className="text-center pt-2">
        Already Have An Account
        <Link className="text-dark px-2" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Registration;
