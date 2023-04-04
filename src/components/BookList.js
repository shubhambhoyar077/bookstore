import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/booksSlice';

export default function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div>
      <ul className="booklist">
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
}
