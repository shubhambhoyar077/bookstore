import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, postBook } from '../redux/books/booksSlice';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handelformSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {
        item_id: uuidv4(),
        title,
        author,
        category: null,
      };
      dispatch(postBook(book))
        .then(() => {
          dispatch(addBook(book));
          setTitle('');
          setAuthor('');
        });
    }
  };
  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handelformSubmit}>
        <input className="inp-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
        <input className="inp-author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Book author" />
        <button className="add-btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
