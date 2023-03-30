import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';

import RouteLayout from './components/RouteLayout';
import BookList from './components/BookList';
import Categories from './components/Categories';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<BookList />} />
      <Route path="categories" element={<Categories />} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
