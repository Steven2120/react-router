import React from "react";
import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <h1>
        Blogs
        <Outlet />
      </h1>
    </div>
  );
};

export default Blogs;
