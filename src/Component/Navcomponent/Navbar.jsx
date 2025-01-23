import React from "react";
import { items } from "./Navitems";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full p-7 bg-gray-600 text-white text-xl flex justify-around">
      {items.map((item) => (
        <ul key={item.id}>
          <li>
            <Link to={item.path}>{item.title}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Navbar;
