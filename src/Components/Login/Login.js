import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialBtn from "../SocialBtn/SocialBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword, u, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  const handlerEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  const handlerPasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handlerReset = async () => {
    if (userInfo?.email) {
      await sendPasswordResetEmail(userInfo.email);
      toast("Sent email");
    } else {
      toast("Please fill up require email");
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
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
        {error?.code}
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
      <ToastContainer />
    </div>
  );
};

export default Login;
