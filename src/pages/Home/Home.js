import React, { useState, useEffect } from 'react'
import NavBar from '../../componets/NavBar'
import BookList from '../../componets/BookList'

function Home() {
  const [books, setBooks] = useState(null);


  useEffect(() => {
    fetch(`http://localhost:8080/bookInfos`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(jsonResult => setBooks(jsonResult))
  }, [])


  return (
    <div>
      <NavBar />
      <BookList books = {books}></BookList>
    </div>
  )
}

export default Home