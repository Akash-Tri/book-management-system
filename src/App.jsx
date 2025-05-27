import BookStore from "./components/BookStore";
import { books } from "./utils/mockData";
import "./components/style.css";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  function handleSearch() {
    const filterBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredBooks(filterBooks);
  }

  return (
    <>
      <div className="search">
        <h2>Search Books</h2>
        <div>
          <input
            type="text"
            className="search-input"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <BookStore bookData={filteredBooks} />
    </>
  );
}

export default App;
