import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import SocialBtn from "../SocialBtn/SocialBtn";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const handlerEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  const handlerPasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handlerReset = async () => {
    if (userInfo?.email) {
      await sendPasswordResetEmail(userInfo.email);
      alert("Sent email");
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
    console.log("success");
  };
  return (
    <div className="form-container">
      <h3 className="form-title">Login</h3>
      <form onSubmit={handlerSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handlerEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handlerPasswordChange}
        />
        <input type="submit" value="Login" />
      </form>
      <button
        className="btn btn-link"
        style={{ color: "black", textDecoration: "none" }}
        onClick={handlerReset}
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
