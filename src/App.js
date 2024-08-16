import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Jobs from "./pages/Jobs";
import Bookmarks from "./pages/Bookmarks";
import JobDetail from "./components/JobDetail";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
        <nav className="bottom-nav">
          <NavLink to="/" exact="true" activeclassname="active">
            Jobs
          </NavLink>
          <NavLink to="/bookmarks" activeclassname="active">
            Bookmarks
          </NavLink>
        </nav>
      </div>
    </Router>
  );
}

export default App;
