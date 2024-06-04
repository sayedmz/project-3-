import React from "react";
import "./TopBar.css";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <div id="sideBar">
        <NavLink
          activeClassName="active"
          className="sideLink"
          to="/dashboard/users"
        >
          <i className="fa-solid fa-users"></i> Users
        </NavLink>
        <NavLink
          activeClassName="active"
          className="sideLink"
          to="/dashboard/user/create"
        >
          <i className="fa-solid fa-user-plus"></i> New User
        </NavLink>
      </div>
    </>
  );
};
