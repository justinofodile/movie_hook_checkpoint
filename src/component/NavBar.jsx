import React from "react";

const NavBar = () => {
  return (
    <nav className="shadow-md p-2 bg-gray-100">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVrKt5KRYLXi34i4vyVLYiLfOiVCmuo6uew&usqp=CAU"
          alt=""
          className="w-14"
        />
        <h2 className="text-red-500 tracking-wider">Movie App</h2>
      </div>
    </nav>
  );
};

export default NavBar;
