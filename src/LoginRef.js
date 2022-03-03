import React, { useRef } from "react";

const LoginRef = () => {
  const userName = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName.current.value);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" ref={userName} />
        </label>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginRef;
