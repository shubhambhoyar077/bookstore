import { NavLink } from 'react-router-dom';

export default function NavItem() {
  return (
    <ul>
      <NavLink to="/">Books</NavLink>
      <NavLink to="categories">Categories</NavLink>
    </ul>
  );
}
