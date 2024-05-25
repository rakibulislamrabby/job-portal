import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ErrorPage from "../ErrorPage/ErrorPage";

const Root = () => {
  return (
    <div className="mx-28 mt-6">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
