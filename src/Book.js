import React,{ useContext} from 'react'
import './book.css'
import {Link} from 'react-router-dom'
import {Bookcontext} from './BookProvider'
function Book({book}) {
    const [novel ,setnovel]= useContext(Bookcontext);
   
    return (
        <div className="book">
           <Link
            to="/info"
              >  
            <img src={book?.volumeInfo.imageLinks?.thumbnail} alt="Image unvailable" onClick={()=>setnovel(book)} />
            
            </Link> 
           
             <p>{book.volumeInfo.authors}</p>
        </div>
    )
}

export default Book;
