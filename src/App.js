import React from "react";
import SampleFunctional from "./SampleFunctional";
import Details from "./Details";
import List from "./List";
import FilterList from "./FilterList";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SampleFunctional />} />
          <Route path="/details" element={<Details />} />
          <Route path="/list" element={<List />} />
          <Route path="/filterList" element={<FilterList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
