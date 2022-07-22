import React, { useState, useEffect } from 'react'
import BookList from '../../componets/BookList'
import { getMyBooks } from '../../services/UserService'




function MyBooks() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getMyBooks({ id: 1 }))
    }

    fetchData()
  }, [])


  return (
    <div>
      <BookList books={books}></BookList>
    </div>
  )
}

export default MyBooks