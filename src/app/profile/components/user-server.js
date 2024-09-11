"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const ProfileClient = () => {
  const { user, error, isLoading } = useUser();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming user is an async data fetching function
        // This might not be needed if useUser already handles it
        if (user) {
          setProfileData(user);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [user]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return profileData ? (
    <div>
      <h1>Profile</h1>
      <img src={profileData.picture} alt={profileData.name} />
      <h2>{profileData.name}</h2>
      <p>{profileData.email}</p>
    </div>
  ) : (
    <div>
      <h1>Profile</h1>
      <p>No user found logged in</p>
    </div>
  );
};

export default ProfileClient;
