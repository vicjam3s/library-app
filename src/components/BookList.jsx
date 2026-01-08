const books = [
  { id: 1, title: "Clean Code", available: true },
  { id: 2, title: "Eloquent JavaScript", available: false },
  { id: 3, title: "React Basics", available: true },
  { id: 4, title: " Pythin introduction", available: true}
];

const BookList = () => {
  const availableBooks = books.filter(book => book.available);

  return (
    <div className="section">
      <h3>Books</h3>

      {availableBooks.map(book => (
        <div key={book.id} className="card">
          {book.title}
        </div>
      ))}
    </div>
  );
};

export default BookList;

