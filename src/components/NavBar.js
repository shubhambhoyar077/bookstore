import { CgProfile } from 'react-icons/cg';
import NavItem from './NavItems';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <h1>Bookstore CMS</h1>
        <NavItem />
      </div>
      <span><CgProfile className="profile" /></span>
    </nav>
  );
}
