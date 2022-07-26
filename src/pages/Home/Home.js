import React, { useState, useEffect } from 'react'
import BookList from '../../componets/BookList'
import { getAllBookInfo } from '../../services/bookInfoService'


function Home() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getAllBookInfo())
    }

    fetchData()

  }, [])

  return (

    <div>
      <BookList books={books}></BookList>
    </div>
  )
}

export default Home