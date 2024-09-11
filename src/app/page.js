"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Homepage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="bg-purple-300 min-h-screen flex justify-between">
      <div>
        <h1 className="text-center font-bold text-2xl text-gray-700 m-10">
          Welcome to the Productivity Website!
        </h1>
        <div className="flex justify-center">
          <Image
            src="/image/pro.png"
            alt="Productivity"
            width={400}
            height={400}
          />
        </div>
      </div>
      {!user && (
        <div className="m-8">
          <a
            href="/api/auth/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </a>
        </div>
      )}

      {user && (
        <div className="m-8">
          <a
            href="/api/auth/logout"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
}
