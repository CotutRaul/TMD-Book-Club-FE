/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import BookList from '../../componets/BookList'
import { getMyRented } from '../../services/userService'
import { useSelector } from "react-redux"
import { ExtendRentPopup } from '../../features/ExtendRentPopup'


const MyRented = () => {
  const [books, setBooks] = useState(null);
  const user = useSelector((state) => state.user.value)

  const [openExtendRentPopup, setOpenExtendRentPopup] = useState(false)
  const [book, setBook] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getMyRented({ id: user.id }))
    }

    fetchData()
  }, [openExtendRentPopup])

  const handleAction = (open, book) => {
    setOpenExtendRentPopup(open)
    setBook(book)
  }

  const renderExtendRentPopup = () => {
    return <ExtendRentPopup open={openExtendRentPopup} book={book} action={handleAction} />
  }

  return (
    <div>
      <h1>My Rented:</h1>
      {renderExtendRentPopup()}
      <BookList books={books} action={handleAction} ></BookList>

    </div>

  )

}

export default MyRented