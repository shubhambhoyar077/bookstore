export default function Book({ book }) {
  return (
    <li>
      <div className="book-info">
        <h2>{book.title}</h2>
        <span>{book.author}</span>
        <div className="book-action-btn">
          <button type="button">Comment</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
}
