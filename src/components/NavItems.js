import { NavLink } from 'react-router-dom';

export default function NavItem() {
  return (
    <ul>
      <NavLink className="nav-links" to="/">Books</NavLink>
      <NavLink className="nav-links" to="categories">Categories</NavLink>
    </ul>
  );
}
