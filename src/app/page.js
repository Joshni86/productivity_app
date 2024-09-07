import LoginButton from "@/components/LoginButton";

export default function homepage() {
  return (
    <div className="bg-purple-200 min-h-screen flex justify-center">
      <div>
        <h1 className="text-center font-bold text-2xl text-gray-700 m-10">
          Welcome to the Productivity Website!
        </h1>
        <LoginButton />
      </div>
    </div>
  );
}
