import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import ContactUs from "../src/components/ContactUs";
import Login from "../src/components/Login";
import SignUp from "../src/components/SignUp";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <ContactUs />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>
    </div>
  );
};

export default App;
