import React, { useState } from "react";
import Sample from "./SampleClass";
import SampleFunctional from "./SampleFunctional";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

  const onChange = (event) => {
    setTitle(event.target.value);
  };
  
  return (
    <div className="App">
      {/* <Sample /> */}
      <input type="text" value={title} onChange={onChange} />
      <SampleFunctional title={title} />
    </div>
  );
}

export default App;
