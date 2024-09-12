import { getSession } from "@auth0/nextjs-auth0";
import ProfileClient from "./components/user-client";
import ProfileServer from "./components/user-server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/api/auth/login");
  }
  return (
    <div className="bg-pink-200 w-full min-h-screen">
      <div>
        <br />
        <h1 className="text-black-300 font-bold text-3xl ml-10">Profile</h1>
        <br />
        <ProfileClient />
      </div>
    </div>
  );
};

export default Profile;
