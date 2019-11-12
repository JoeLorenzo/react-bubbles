import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"
import Login from "./components/Login"
import BubblePage from "./components/BubblePage"
import "./styles.scss";

function App() {
  return (
    <Router>
        <div className="App">
        {/*Links*/}
            <nav>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/login">Log-in</Link></div>
                 <div><Link to="/account">Account</Link></div>
            </nav>

        {/*Routes*/}
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/account" component={BubblePage}/>
        </div>
    </Router>
  );
}

export default App;
