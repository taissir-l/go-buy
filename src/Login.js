import React, { useState } from "react";
import "./styles/Login.css";
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase"; // Importing `auth` from your firebase.js file
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"; // Import necessary functions

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/"); // Redirect to home page upon successful sign-in
      })
      .catch((error) => alert(error.message)); // Show error if sign-in fails
  };

  const register = (e) => {
    e.preventDefault();

    // Register a new user
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/"); // Redirect to home page upon successful registration
      })
      .catch((error) => alert(error.message)); // Show error if registration fails
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider(); // Create Google provider instance
    signInWithPopup(auth, provider) // Open a popup for Google sign-in
      .then((result) => {
        navigate("/"); // Redirect to home page upon successful sign-in
      })
      .catch((error) => alert(error.message)); // Show error if sign-in fails
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="/images/logo1.png" alt="Logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>

        {/* Google Sign-In Button */}
        <button
          onClick={signInWithGoogle}
          className="login__googleSignInButton"
        >
          Sign in with Google <GoogleIcon/>
        </button>
      </div>
    </div>
  );
}

export default Login;
