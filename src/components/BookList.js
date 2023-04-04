import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

export default function BookList() {
  const books = useSelector((state) => state.books.books);
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
