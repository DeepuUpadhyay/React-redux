import React from "react";
import { NavLink } from "react-router-dom";
import { Home } from "../home";

const Header = () => {
 const activeStyle = { color: "#F15B2A" };
 return (
  <div>
   <nav>
    <NavLink to="/" activeStyle={activeStyle} exact>
     Main
    </NavLink>
    {"|"}
    <NavLink to="/courses" activeStyle={activeStyle} exact>
     Courses
    </NavLink>
    {"|"}
    <NavLink to="/about " activeStyle={activeStyle}>
     About
    </NavLink>
    {"|"}
    <NavLink to="/courseform " activeStyle={activeStyle}>
     courseForm
    </NavLink>
   </nav>
  </div>
 );
};

export { Header };
