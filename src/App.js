import React from "react";
import NavBar from "./component/Navbar";
import Home from "./pages/Home";
// import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
export default function App() {
    return (
        <div>
            <NavBar />
            <Home />
            {/* <BrowserRouter>
            <Router>
            
            <Switch> */}
            {/* <Route path="/"> 
            <Home />                
            </Route>
            </Switch>
            </Router>
            </BrowserRouter> */}
        </div>
    )
}