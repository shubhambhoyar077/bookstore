import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, deleteBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

export default function Book({ book }) {
  const dispatch = useDispatch();
  const percentage = 0;
  const handelRemove = (bookId) => {
    dispatch(deleteBook(bookId))
      .then(dispatch(removeBook(bookId)));
  };
  return (
    <li>
      <div className="book-info">
        <h2 className="Title">{book.title}</h2>
        <span className="author">{book.author}</span>
        <div className="book-action-btn">
          <button type="button">Comment</button>
          <button type="button" onClick={() => handelRemove(book.item_id)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div>
          <CircularProgressbar
            className="Oval"
            value={percentage}
          />
          <div>
            <span className="Percent-Complete">0%</span>
            <span className="Complete-text">Completed</span>
          </div>
        </div>
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
