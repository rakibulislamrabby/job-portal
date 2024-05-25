import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="m-auto w-3/5">
      <h1 className="text-4xl text-red-600 py-10 ">404 Error</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
