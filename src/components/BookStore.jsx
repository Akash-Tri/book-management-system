import Books from "./Books";
import "./style.css";

function BookStore(props){
    return(
        <div className="booklist">
        {
            props.bookData.map((data)=> < Books key={data.id}  bookDetails ={data}/>)
        }
           
     
        </div>
    )
};

export default BookStore;