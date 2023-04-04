import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import Book from './Book';
import AddBook from './AddBook';

export default function BookList() {
  const books = useSelector((state) => state.books.books);
  return (
    <div>
      <ul className="booklist">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
}
