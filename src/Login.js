import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SampleRender from "./SampleRender";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    if (username === "admin") {
      history("/details");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <SampleRender />
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
