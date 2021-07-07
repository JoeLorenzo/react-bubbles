import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"
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
                 <div><Link to="/bubblepage">Bubble Page</Link></div>
            </nav>

        {/*Routes*/}
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/bubblepage" component={BubblePage}/>
        </div>
    </Router>
  );
}

export default App;
