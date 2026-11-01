import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  // State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // API Calling
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Loading Message
  if (loading) {
    return <h2 className="loading">Loading Users...</h2>;
  }

  // Error Message
  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="users-container">
      <h1>Our Users</h1>

      <div className="user-list">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>

            <p>Email: {user.email}</p>

            <Link to={`/users/${user.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
