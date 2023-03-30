import Book from "./Book";

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
    <ul className="booklist">
      <Book bookd={books}/>
    </ul>
  );
}