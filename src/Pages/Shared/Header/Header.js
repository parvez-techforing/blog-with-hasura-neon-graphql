import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";

const Header = () => {
  return (
    <>
      <div className="navbar lg:px-20 bg-base-100">
        <div className="flex-1">
          <Link to="/" className="normal-case text-xl flex justify-center items-center gap-2">
            <img src={logo} alt="logo" className="h-10" />
            <span className="text-primary font-bold">Blog</span>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <Link to="/" className="btn btn-primary btn-sm rounded-btn">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
