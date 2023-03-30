export default function Book({ book }) {
  return (
        <li>
          <div className="book-info">
            <h2>{book.title}</h2>
            <span>{book.author}</span>
            <div className="book-action-btn">
              <button>Comment</button>
              <button>Remove</button>
              <button>Edit</button>
            </div>
          </div>
          <div className="book-progress">
            <button>UPDATE PROGRESS</button>
          </div>
        </li>
  );
}