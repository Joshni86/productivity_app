"useclient";

import React from "react";
export const Navbar = () => {
  console.log("Navbar is rendering");
  return (
    <div className="py-4 w-full flex justify-between bg-purple-400">
      <div className="flex gap-8">
        <a href="/" className="text-black font-bold text-2xl m-4">
          Home
        </a>
        <a href="/profile" className="text-black font-bold text-2xl m-4">
          Profile
        </a>
      </div>
    </div>
  );
};
