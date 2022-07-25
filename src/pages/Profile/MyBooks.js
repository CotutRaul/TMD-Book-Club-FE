/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import BookList from '../../componets/BookList'
import { getMyBooks } from '../../services/UserService'
import { useSelector } from "react-redux"





function MyBooks() {
  const [books, setBooks] = useState(null);
  const user = useSelector((state) => state.user.value)

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getMyBooks({ id: user.id }))
    }

    fetchData()
  }, [])


  return (
    <div>
      <h1>My Books:</h1>
      <BookList books={books}></BookList>
    </div>
  )
}

export default MyBooks