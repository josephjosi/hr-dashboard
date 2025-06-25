'use client';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=20')
      .then(res => res.json())
      .then(data => {
        const enriched = data.users.map((user: any) => ({
          ...user,
          department: ['HR', 'Tech', 'Sales', 'Admin'][Math.floor(Math.random() * 4)],
          rating: Math.ceil(Math.random() * 5),
        }));
        setUsers(enriched);
      });
  }, []);

  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div key={user.id} className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
          <h2 className="text-lg font-bold">{user.firstName} {user.lastName}</h2>
          <p className="text-sm">{user.email}</p>
          <p className="text-sm">Age: {user.age}</p>
          <p className="text-sm">Dept: {user.department}</p>
          <p className="text-sm">Rating: {'⭐'.repeat(user.rating)}</p>
          <div className="flex gap-2 mt-3">
            <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded">View</button>
            <button className="px-3 py-1 text-xs bg-yellow-500 text-white rounded">Bookmark</button>
            <button className="px-3 py-1 text-xs bg-green-600 text-white rounded">Promote</button>
          </div>
        </div>
      ))}
    </main>
  );
}
