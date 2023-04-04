import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="book-info">
        <h2>{book.title}</h2>
        <span>{book.author}</span>
        <div className="book-action-btn">
          <button type="button">Comment</button>
          <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};
