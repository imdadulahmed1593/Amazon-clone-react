import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>pasword</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
