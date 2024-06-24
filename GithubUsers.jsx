import React, { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (username) {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          setUsername('');
        } else {
          console.error('User not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Inserisci username GitHub"
        />
        <button type="submit">Cerca</button>
      </form>
      <ul>
        {user && <GithubUser username={username} user={user} />}
      </ul>
    </div>
  );
};

export  default GithubUsers