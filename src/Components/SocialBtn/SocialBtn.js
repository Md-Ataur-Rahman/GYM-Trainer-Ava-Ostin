import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./SocialBtn.css";

const SocialBtn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="social-btn-container">
      <div className="or-container">
        <div className="border"></div>
        <div className="or-text">Or</div>
        <div className="border"></div>
      </div>
      <button onClick={() => signInWithGoogle()} className="social-btn">
        Google
      </button>
    </div>
  );
};

export default SocialBtn;
