import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-blue-600 text-white p-4">
        <ul className="flex justify-center space-x-6">
          <li className="hover:text-yellow-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
