import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="shadow-md p-2 bg-gray-100">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVrKt5KRYLXi34i4vyVLYiLfOiVCmuo6uew&usqp=CAU"
            alt=""
            className="w-14"
          />
          <h2 className="text-red-500 tracking-wider">Movie App</h2>
        </div>
        <div className="flex gap-4">
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/moviemarketplace"}>MARKET</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
