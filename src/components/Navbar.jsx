import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">User Directory</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
