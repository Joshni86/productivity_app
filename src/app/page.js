"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Homepage() {
  const { error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="bg-gray-400 min-h-screen p-10">
      <div>
        <h1 className="font-bold text-4xl text-black text-center p-10 font-mono animate-typing">
          Welcome to the Productivity Website!
        </h1>
        <div className="flex justify-center items-center">
          <Image
            src="/image/pro.png"
            alt="Productivity"
            width={400}
            height={400}
            className="my-5"
          />
        </div>
      </div>
    </div>
  );
}
