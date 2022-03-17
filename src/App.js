import React, { Suspense } from "react";
import SampleFunctional from "./SampleFunctional";
import List from "./List";
import FilterList from "./FilterList";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import LoginRef from "./LoginRef";
import Parent from "./InverseFlow";
import SampleStyle from "./SampleStyle";
import SampleError from "./SampleError";
import ErrorBoundary from "./ErrorBoundary";
import HOC from "./HigherOrder";
import SampleRedux from "./SampleRedux";
const DetailsComponent = React.lazy(() => import("./Details"));

function App() {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/error" element={<SampleError />} />
              <Route exact path="/" element={<SampleFunctional />} />
              <Route path="/details" element={<DetailsComponent />} />
              <Route path="/details/:id" element={<DetailsComponent />} />
              <Route path="/list" element={<List />} />
              <Route path="/filterList" element={<FilterList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/loginRef" element={<LoginRef />} />
              <Route path="/parent" element={<Parent />} />
              <Route path="/sampleStyle" element={<SampleStyle />} />
              <Route path="/hoc" element={<HOC />} />
              <Route path="/redux" element={<SampleRedux />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
