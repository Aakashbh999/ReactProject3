import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full ">
      Welcome To My Castle My Friend
      <button className="p-2 bg-blue-500 rounded-md m-5">
        <Link to={"service"}>navigate</Link>
      </button>
      <div className="w-[100%]    ">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
