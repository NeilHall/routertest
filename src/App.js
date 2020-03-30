import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import About from "./About"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from "./components/Header";

const App = () => (
    <Router>
        <div className="App-header">
            <Header />
        <Switch>
            <Route path="/about">
              <About />
            </Route>
        </Switch>
        </div>
    </Router>
 )

export default App;
