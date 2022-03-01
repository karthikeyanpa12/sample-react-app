import React from "react";
import SampleFunctional from "./SampleFunctional";
import Details from "./Details";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SampleFunctional />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
