import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import MorePage from "./pages/MorePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/abra" Component={LandingPage}></Route>
          <Route path="/more" Component={MorePage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
