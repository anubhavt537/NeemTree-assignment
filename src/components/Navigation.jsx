import React from "react";
import { NavLink } from "react-router-dom";
import style from "../assets/styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={style.nav}>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive
            ? {
                fontWeight: "bold",
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
    </div>
  );
};

export default Navigation;
