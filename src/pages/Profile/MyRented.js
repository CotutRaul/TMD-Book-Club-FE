import React, { useState, useEffect } from 'react'
import BookList from '../../componets/BookList'
import { getMyRented } from '../../services/UserService'

export const MyRented = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setBooks(await getMyRented({ id: 1 }))
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
