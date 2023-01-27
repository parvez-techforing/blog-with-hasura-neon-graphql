import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="" className="normal-case text-xl">Blog</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div className="m-1 btn btn-primary">
              Search
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
