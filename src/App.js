import React from "react";
import SampleFunctional from "./SampleFunctional";
import Details from "./Details";
import List from "./List";
import FilterList from "./FilterList";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import LoginRef from "./LoginRef";
import Parent from "./InverseFlow";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SampleFunctional />} />
          <Route path="/details" element={<Details />} />
          <Route path="/list" element={<List />} />
          <Route path="/filterList" element={<FilterList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginRef" element={<LoginRef />} />
          <Route path="/parent" element={<Parent />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
