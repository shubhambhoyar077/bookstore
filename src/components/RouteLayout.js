import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function RouteLayout() {
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <Outlet />
    </main>
  </>;
}
