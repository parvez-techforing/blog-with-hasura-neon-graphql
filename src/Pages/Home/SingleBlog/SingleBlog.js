import React from "react";
import Search from "./../Search/Search";
import { Outlet, Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <Search />
      <div className="drawer drawer-mobile lg:px-20 bg-base-200">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-6">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-white">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
                <Link to="/">Dashboard</Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
