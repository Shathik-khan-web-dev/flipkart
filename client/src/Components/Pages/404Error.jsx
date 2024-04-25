import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="vh-100 bg-secondary d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center text-white">404 Page_Not_Found</h1>
        <h5 className="text-center text-white">
          Go to{" "}
          <Link to={"/"} className="text-info">
            Home
          </Link>
        </h5>
      </div>
    </>
  );
};

export default PageNotFound;
