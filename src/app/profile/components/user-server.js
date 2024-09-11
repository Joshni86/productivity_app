import { getSession } from "@auth0/nextjs-auth0";
const ProfileServer = () => {
  const session = await.getSession();
  const user = session?.user;
  if (!user) {
    return null;
  }

  return user ? (
    <div>
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

export default ProfileServer;
