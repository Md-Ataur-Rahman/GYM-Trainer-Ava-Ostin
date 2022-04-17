import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import SocialBtn from "../SocialBtn/SocialBtn";
import "./Registration.css";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
const Registration = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [sendEmailVerification, sending, VarificationError] =
    useSendEmailVerification(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handlerEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  const handlerPasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    console.log("success");
  };

  console.log(userInfo);
  return (
    <div className="form-container">
      <h3 className="form-title">Registration</h3>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="name" placeholder="Name" required />
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
