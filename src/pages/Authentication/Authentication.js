import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./Authentication.scss";

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <div className="auth-page">
      {isSignUp ? (
        <div className="sign-up_container">
          <SignUp />
          <span className="auth-switch-span" onClick={() => setIsSignUp(false)}>
            Already have an account? Sign In
          </span>
        </div>
      ) : (
        <div className="sign-in_container">
          <SignIn />
          <span className="auth-switch-span" onClick={() => setIsSignUp(true)}>
            Don't have an account? Sign Up
          </span>
        </div>
      )}
    </div>
  );
};

export default Authentication;
