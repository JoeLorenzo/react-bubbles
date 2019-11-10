import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login"
import "./styles.scss";

function App() {
  return (
    <Router>
        <div className="App">
        {/*Links*/}
            <nav>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/login">Log-in</Link></div>
            </nav>

        {/*Routes*/}
        <Route exact path="/" component={Login} />
        </div>
    </Router>
  );
}

export default App;
