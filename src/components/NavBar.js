import NavItem from "./NavItems";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <h1>Bookstore CMS</h1>
        <NavItem />
      </div>
      <span>Profile</span>
    </nav>
  );
}