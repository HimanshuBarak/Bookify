import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {Bookcontext} from './BookProvider'
import './bookinfo.css'

function Bookinfo() {
    const [novel ,setnovel]= useContext(Bookcontext);
   console.log(novel)
    return (
        <div className="bookinfo">
            
            <Link to="/"><button>Back</button></Link>
            <div className="book_container">
                <div className="book_img">
             <img src={novel?.volumeInfo.imageLinks?.thumbnail} alt="Image unvailable"  />
             <button>Buy Now</button>
                </div>
            
             <div className="book_info">
               <h2>{novel?.volumeInfo.title}</h2>
                <h4>{novel?.volumeInfo.authors}</h4>
                <h5><strong>Publisher:</strong>{novel?.volumeInfo.publisher}</h5>
                <h5><strong>Publishing Date:</strong>{novel?.volumeInfo.publishedDate}</h5>
                <h5><strong>Page Count:</strong> {novel?.volumeInfo.pageCount}</h5>
                 <p>{novel?.volumeInfo.description}</p>
             </div>
            </div>
        
        </div>
    )
}

export default Bookinfo;
