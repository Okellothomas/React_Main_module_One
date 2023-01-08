import React from "react";
import NavBar from "./component/Navbar";
import Home from "./pages/Home";
// import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

export default function App() {
    return (
        <div>
            <NavBar />
            <Home />
            {/* <Router>
            <Switch>
            <Route>
                        
            </Route>
            </Switch>
            </Router> */}
        </div>
    )
}