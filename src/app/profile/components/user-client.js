"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const ProfileClient = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div className="ml-10">
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <div>
      <h1>Profile</h1>
      <p>No user found logged in</p>
    </div>
  );
};

export default ProfileClient;
