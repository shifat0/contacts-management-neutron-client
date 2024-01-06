import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8 text-center bg-slate-800">
      <h1 className="text-red-400 text-5xl font-bold">
        Sorry, The requested Page is not Found
      </h1>
      <Link to="/">
        <span className="underline text-white">Back to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
