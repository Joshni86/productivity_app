"useclient";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
export const Navbar = () => {
  return (
    <div className="py-4 flex-w-full justify-between bg-purple-400">
      <div flex gap-8>
        <a href="/" className="text-white font-bold text-2xl m-4">
          {" "}
          Home{" "}
        </a>
        <a href="/profile" className="text-white font-bold text-2xl m-4">
          {" "}
          Profile{" "}
        </a>
        <a href="/protected" className="text-white font-bold text-2xl m-4">
          {" "}
          Sensitive info?{" "}
        </a>
        {/* <a href="/" className="text-white font-bold text-2xl m-4"> Home </a> */}
      </div>
    </div>
  );
};
