"useclient";

import React from "react";
export const Navbar = () => {
  console.log("Navbar is rendering");
  return (
    <div className="p-1 w-full flex justify-center  bg-gray-300  shadow-black ">
      <div className="flex space-x-4 bg-white bg-opacity-35 rounded-full pl-5 pr-5 m-2">
        <a
          href="/"
          className="text-violet-800 font-mono text-xl mt-2 hover:underline"
        >
          Home
        </a>
        <a
          href="/profile"
          className="text-violet-800 font-mono text-xl mt-2 hover:underline"
        >
          Profile
        </a>
      </div>
    </div>
  );
};
