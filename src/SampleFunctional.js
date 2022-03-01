import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SampleFunctional() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    console.log(title, "component will update");
  }, [title]);

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <Link to="/details">About</Link>
      <input type="text" value={title} onChange={onChange} />
      {title}
    </div>
  );
}

export default SampleFunctional;
