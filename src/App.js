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
      <div className="App-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
