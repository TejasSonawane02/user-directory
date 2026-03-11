import React from 'react';

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="card-top-accent"></div>
      <div className="avatar-placeholder">
        {user.name.charAt(0)}
      </div>
      <div className="user-info">
        <h3>{user.name}</h3>
        <span className="user-role">{user.company.bs}</span>
        <div className="user-details">
          <p className="detail-row">
            <span className="detail-icon">✉️</span>
            <span>{user.email.toLowerCase()}</span>
          </p>
          <p className="detail-row">
            <span className="detail-icon">🏢</span>
            <span>{user.company.name}</span>
          </p>
          <p className="detail-row">
            <span className="detail-icon">📍</span>
            <span>{user.address.city}</span>
          </p>
          <p className="detail-row">
            <span className="detail-icon">📞</span>
            <span>{user.phone.split(' ')[0]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
