import React, { useState, useEffect } from 'react'
import NavBar from '../../componets/NavBar'
import BookCard from '../../componets/BookCard'
import "./Home.css"

function Home() {
  const [books, setBooks] = useState(null);


  useEffect(() => {
    fetch(`http://localhost:8080/bookInfos`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(jsonResult => setBooks(jsonResult))
  }, [])

  const generateBookCards = () =>{

  }


  return (
    <div>
      <NavBar />
      <div className='BookList'>
        {books && books.map((book) =>
          <BookCard key={book.id} book = {book}/>)}
      </div>
    </div>
  )
}

export default Home