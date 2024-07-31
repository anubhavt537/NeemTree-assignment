import React from "react";
import { NavLink } from "react-router-dom";
import style from "../assets/styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={style.nav}>
      <NavLink
        to="/"
        style={({ isActive, isPending }) =>
          isActive
            ? {
                fontWeight: "bold",
                // backgroundColor: "white",
                color: "blue",
                textDecoration: "none",
              }
            : {
                textDecoration: "none",
              }
        }
      >
        Home 🏠
      </NavLink>
      &nbsp;
      <NavLink
        to="/add"
        style={({ isActive, isPending }) =>
          isActive
            ? {
                fontWeight: "bold",
                // backgroundColor: "white",
                color: "blue",
                textDecoration: "none",
              }
            : {
                textDecoration: "none",
              }
        }
      >
        Add User ➕
      </NavLink>
    </div>
  );
};

export default Navigation;
