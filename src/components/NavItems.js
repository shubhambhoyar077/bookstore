import { NavLink } from 'react-router-dom';

export default function NavItem() {
  return (
    <ul>
      <NavLink className="nav-links" to="/">BOOKS</NavLink>
      <NavLink className="nav-links" to="categories">CATEGORIES</NavLink>
    </ul>
  );
}
