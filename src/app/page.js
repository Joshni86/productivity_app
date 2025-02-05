"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Homepage() {
  const { error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const quotes = [
    "If you judge yourself, you likely won't get judged.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Do what you can, with what you have, where you are.",
  ];

  const todayIndex = new Date().getDate() % quotes.length;
  const dailyQuote = quotes[todayIndex];
  return (
    <div className="bg-black min-h-screen p-10">
      <div>
        <h1 className="font-bold text-4xl text-black text-center p-5  font-mono animate-typing">
          Welcome to the Productivity Website!
        </h1>
        <div className="border-blue-50 border-spacing-5 border-2">
          <p className="text-white text-center font-mono text-3xl">
            Quote of the Day
          </p>
          <p className="text-white text-center font-mono text-3xl">
            {dailyQuote}
          </p>
        </div>
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
