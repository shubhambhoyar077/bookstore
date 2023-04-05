import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, deleteBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

export default function Book({ book }) {
  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState(0);
  const handelRemove = (bookId) => {
    dispatch(deleteBook(bookId))
      .then(dispatch(removeBook(bookId)));
  };

  const handelProgress = () => {
    let per = percentage;
    if (per < 100) {
      setPercentage(per += 2);
    }
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
        <div className="oval-progress">
          <CircularProgressbar
            className="Oval"
            value={percentage}
          />
          <div className="text-peogress">
            <span className="Percent-Complete">
              {percentage}
              %
            </span>
            <span className="Complete-text">Completed</span>
          </div>
        </div>
        <div className="chapter-prpgress">
          <span className="Current-Chapter">
            Current Chapter
          </span>
          <span className="Current-Lesson">
            Chapter 17
          </span>
          <button className="update-progress" type="button" onClick={handelProgress}>UPDATE PROGRESS</button>
        </div>
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
