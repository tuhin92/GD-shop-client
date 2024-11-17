import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const UserDropDown = () => {
  const { user, Logout } = useAuth();
  const handleLogout = () =>{
    Logout();
  }


  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className=" w-8 rounded-full">
            <img src={`${user?.photoURL || "/public/user.png"}`} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <Link>Dashboard</Link>
        </li>
        <li>
          <button onClick={handleLogout} className="btn btn-primary btn-sm">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
