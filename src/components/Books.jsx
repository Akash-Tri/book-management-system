import "./style.css";

function Books(props) {
  return (
    <div className="book-card">
      <img src={props.bookDetails.image} alt=" " className="book-cover" />
      <div className="book-details">
        <h3 className="book-title">{props.bookDetails.title} {props.bookDetails.published}</h3>
        <h2 className="book-author">{props.bookDetails.author}</h2>
        <p className="book-desc">{props.bookDetails.description}</p>
      </div>
    </div>
  );
}

export default Books;
