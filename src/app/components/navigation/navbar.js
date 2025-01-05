"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
export const Navbar = () => {
  const { user } = useUser();
  console.log("Navbar is rendering");
  return (
    <div className=" flex justify-between bg-black items-center py-2 px-6 ">
      <div className="flex space-x-4 rounded-full py-2 px-4 ">
        <a
          href="/"
          className="text-white font-mono text-xl leading-none hover:underline"
        >
          Home
        </a>
        <a
          href="/profile"
          className="text-white font-mono leading-none text-xl hover:underline"
        >
          Profile
        </a>
      </div>
      {!user && (
        <div>
          <a
            href="/api/auth/login"
            className=" text-white font-mono py-2 px-4 text-xl rounded-full hover:underline"
          >
            Login
          </a>
        </div>
      )}
      {user && (
        <div>
          <a
            href="./timer"
            className="text-white text-xl hover:text-opacity-80 hover:scale-105 py-2 px-4 rounded font-mono"
          >
            Timer
          </a>
          <a
            href="/api/auth/logout"
            className=" text-white text-xl py-2 px-4 rounded font-mono hover:text-opacity-80 hover:scale-105"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
};
