import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase"; // Importing `auth` from your firebase.js file
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"; // Import necessary functions

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    // Use the imported `signInWithEmailAndPassword` function
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/"); // Redirect to home page upon successful sign-in
      })
      .catch((error) => alert(error.message)); // Show error if sign-in fails
  };

  const register = (e) => {
    e.preventDefault();

    // Use the imported `createUserWithEmailAndPassword` function
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/"); // Redirect to home page upon successful registration
      })
      .catch((error) => alert(error.message)); // Show error if registration fails
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
      </div>
    </div>
  );
}

export default Login;
