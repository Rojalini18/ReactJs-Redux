import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Auth/AuthContext";
import "./login.css";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { token, settoken, setAuth } = useContext(AuthContext);

  const handleonsubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((r) => {
        alert("Login SuccessFull");
        settoken(r.data.token);
        setAuth(true);
      })
      .catch((e) => {
        alert("Error");
      });
  };

  return (
    <div>
      <h3>Login Here!</h3>
      <div className="form">
        <form action="" onSubmit={handleonsubmit}>
          <input
            placeholder="Enter Email"
            type="text"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            placeholder="Enter Password"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <h2>Your Token :{token}</h2>
    </div>
  );
};

export default Login;
