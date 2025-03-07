import React from 'react'


interface User {
  id: number;
  name: string;
}
const UserPage = async () => {
  // static caching
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // dynamic / server caching (update every 10 sec)
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    { next: { revalidate: 20 } });
  const user: User[] = await res.json();
  return (
    <div className="text-3xl font-bold underline">
      Welcome to UserPage
      <h2>Users</h2>
      <ul>
        {user.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default UserPage
