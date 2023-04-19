import React from "react";
// import { Routes, Route } from "react-router-dom";

import "./App.css";

import Main from "./components/Main";
import Nav from "./components/Nav";
import LeftMenu from "./components/LeftMenu";
import SideBar from "./components/sidebar/SideBar";
import RightMenu from "./components/RightMenu";

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
}

export default App;
