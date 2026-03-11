import React from 'react';
import UserCard from './UserCard';

export default function UserList({ users, loading, error }) {
  if (loading) {
    return (
      <div className="status-container">
        <div className="loader"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container error">
        <p>⚠️ {error}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="status-container">
        <p>No users found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="user-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
