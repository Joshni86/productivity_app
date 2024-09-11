"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function LoginButton() {
  const { user, error, isLoading } = useUser();
  return (
    <a
      href="/api/auth/login"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Login
    </a>
  );
}
