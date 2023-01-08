import React from "react";
import NavBar from "./component/Navbar";
import Home from "./pages/Home";
import MyCarousel from "./component/Carousel";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
    return (
        <div>
            <Router>
            <NavBar />
            <MyCarousel />
            <Home />
            <Footer />
            <Switch> 
            <Route path="/"> 
            <Home />                
            </Route>
            </Switch>
            </Router>
        </div>
    )
}