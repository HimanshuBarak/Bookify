import React , {useState,useEffect} from 'react'
import axios from 'axios'
import Book from './Book';
import './row.css'

function Row() {
    const base_url="https://www.googleapis.com/books/v1/volumes?q=";
    
    const [search, setsearch] = useState('subject:Fiction')
    const [books,setbooks] = useState([])
    
    useEffect(() => {
        
        async function fetchbookdata(){
          
           const response = await axios.get(base_url+search)
           setbooks(response.data.items);
           console.log(response);
            return response;
        }fetchbookdata();
       
    }, [search])

    return (
        <div className="container">
        <header >
        <h1>Books App</h1>
        <p> <em>Explore among millions of book titles</em></p>
      </header>  
          <form className="searchform"  >
            <input type="text" placeholder="Search by title,author" onChange={(e)=>setsearch(e.target.value)}/>
            <button>Search</button>    

         </form>
        <div className="row">
            {books.map(book=>{
                return  <Book  book={book}/>
                 
           })}
        </div>
        </div>
        
    )
}

export default Row
