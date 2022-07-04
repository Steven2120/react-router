import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp;
      <Link to="/Blogs">Blogs</Link>
    </nav>
  );
};

export default Navbar;
