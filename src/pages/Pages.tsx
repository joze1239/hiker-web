import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ROUTE } from "../utils/routes";
import Home from "./Home";

const Pages: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default Pages;
