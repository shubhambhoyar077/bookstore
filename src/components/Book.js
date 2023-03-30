export default function Book({ books }) {
  return (
    <>
      {books.map((book) => (
        <li key={book.id}>
          <div className="book-info">
            <h2>{book.title}</h2>
            <span>{book.author}</span>
            <div className="book-action-btn">
              <button>Comment</button>
              <button>Remove</button>
              <button>Edit</button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}