import Book from "./Book";
import AddBook from "./AddBook";
export default function BookList() {
  const books =[
    {
      title: "The Hunger Games",
      author: "Suzanne Collins"
    },
    {
      title: "Dune",
      author: "Frank Herbert"
    },
    {
      title: "Capital in the Twenty-First Century",
      author: "Suzanne Collins"
    }
  ]
  return (
    <div>
      <ul className="booklist">
        {books.map((book) => (
        <Book key={book.id} book={book}/>
        ))}
      </ul>
      <AddBook />
    </div>
  );
}