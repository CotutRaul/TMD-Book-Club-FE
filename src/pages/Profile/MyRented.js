/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import BookList from '../../componets/BookList'
import { getMyRented } from '../../services/UserService'
import { useSelector } from "react-redux"


const MyRented = () => {
  const [books, setBooks] = useState(null);
  const user = useSelector((state) => state.user.value)

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getMyRented({ id: user.id }))
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>My Rented:</h1>
      <BookList books={books}></BookList>
    </div>
  )

}

export default MyRented