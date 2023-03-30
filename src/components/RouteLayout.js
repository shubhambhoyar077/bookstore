import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function RouteLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
