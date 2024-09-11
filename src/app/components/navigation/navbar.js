"useclient";

import React from "react";
export const Navbar = () => {
  console.log("Navbar is rendering");
  return (
    <div className="p-1 w-full flex justify-between bg-purple-400 shadow-md">
      <div className="flex gap-8">
        <a
          href="/"
          className="text-white font-bold text-xl m-2 bg-purple-700 p-2 rounded-full hover:bg-purple-500"
        >
          Home
        </a>
        <a
          href="/profile"
          className="text-white font-bold text-xl m-2  bg-purple-700 p-2 rounded-full border-white hover:bg-purple-500"
        >
          Profile
        </a>
      </div>
    </div>
  );
};
