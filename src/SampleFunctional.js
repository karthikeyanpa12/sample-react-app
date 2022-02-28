import React, { useEffect } from "react";

function SampleFunctional({ title = "", location }) {
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    console.log(title, "component will update");
  }, [title]);

  return <div>{title}</div>;
}

export default SampleFunctional;
