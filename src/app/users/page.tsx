import React from "react";

interface User {
  id: number;
  name: string;
}
const UserPage = async () => {
  // static caching
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // dynamic / server caching (update every 10 sec)
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 20 },
  });
  const user: User[] = await res.json();
  return (
    <div className="min-h-screen bg-cyan-950 text-white flex flex-col">
      <h2 className="text-center p-7 text-3xl">Welcome to UserPage</h2>
      <h2 className="text-center bg-cyan-800 p-3 m-3 text-3xl">Users</h2>

      <ul className="flex flex-wrap gap-2.5 items-center justify-center">
        {user.map((user) => (
          <li key={user.id} className="border border-white p-5 rounded-md hover:bg-cyan-800  animate-pulse">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
