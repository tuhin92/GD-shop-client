import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserDropDown from "./UserDropDown";

const Navbar = () => {
  const { user } = useAuth();
  const navlinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact us</Link>
      </li>
    </>
  );
  return (
    <div className="bg-base-300">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <UserDropDown />
            </div>
          ) : (
            <div className="">
              <div className="flex gap-2">
                <Link to="login">
                  <button className="btn bg-[#b056bb] text-white">Login</button>
                </Link>
                <Link to="register">
                  <button className="btn bg-[#234d6f] text-white">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
